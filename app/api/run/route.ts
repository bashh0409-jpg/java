import { spawn } from "node:child_process";
import { randomUUID } from "node:crypto";
import { NextResponse } from "next/server";
import { getTopic } from "@/content";

export const runtime = "nodejs";

const imageName = "java-notes-runner";
const outputLimit = 32 * 1024;
const runTimeout = 12_000;
let activeRuns = 0;

function prepareJavaSource(source: string) {
  const classMatch = source.match(
    /^\s*(?:public\s+)?(?:final\s+|abstract\s+)?class\s+([A-Za-z_$][\w$]*)\b/m,
  );
  if (classMatch) {
    return { source, fileName: `${classMatch[1]}.java`, mainClass: classMatch[1] };
  }

  const importPattern = /^\s*import\s+(?:static\s+)?[\w.*]+\s*;\s*$/gm;
  const imports = [...source.matchAll(importPattern)].map(([line]) => line.trim());
  const body = source.replace(importPattern, "");
  return {
    source: `${imports.join("\n")}\npublic class Main {\n  public static void main(String[] args) throws Exception {\n${body}\n  }\n}`,
    fileName: "Main.java",
    mainClass: "Main",
  };
}

function executeInDocker(source: string, fileName: string, mainClass: string) {
  return new Promise<{ stdout: string; stderr: string; timedOut: boolean; outputLimited: boolean }>(
    (resolve, reject) => {
      const containerName = `java-notes-${randomUUID()}`;
      const command = [
        "run", "--rm", "--interactive", "--name", containerName,
        "--network=none", "--memory=256m", "--memory-swap=256m", "--cpus=0.5",
        "--pids-limit=32", "--read-only",
        "--tmpfs", "/tmp:rw,noexec,nosuid,size=64m,uid=10001,gid=10001,mode=1777",
        "--user", "10001:10001", "--cap-drop=ALL", "--security-opt=no-new-privileges",
        "--entrypoint", "/bin/sh", imageName, "-c",
        'file="$1"; main="$2"; cat > "/tmp/$file" && javac -J-Xmx128m -d /tmp "/tmp/$file"; result=$?; if [ "$result" -eq 0 ]; then timeout 3s java -Xms8m -Xmx64m -XX:-UsePerfData -cp /tmp "$main"; result=$?; fi; if [ "$result" -eq 124 ]; then echo "Execution timed out." >&2; fi; exit "$result"',
        "runner", fileName, mainClass,
      ];
      const child = spawn("docker", command, { stdio: ["pipe", "pipe", "pipe"] });
      let stdout = "";
      let stderr = "";
      let timedOut = false;
      let outputLimited = false;
      let stopping = false;
      let forceKillTimer: ReturnType<typeof setTimeout> | undefined;

      const stopContainer = (timedOutRun: boolean) => {
        if (stopping) return;
        stopping = true;
        timedOut = timedOutRun;
        const killer = spawn("docker", ["kill", containerName], { stdio: "ignore" });
        forceKillTimer = setTimeout(() => child.kill("SIGKILL"), 1500);
        killer.once("error", () => child.kill("SIGKILL"));
        killer.once("close", () => {
          if (forceKillTimer) clearTimeout(forceKillTimer);
        });
      };

      const appendOutput = (current: string, chunk: Buffer) => {
        const remaining = outputLimit - Buffer.byteLength(current);
        if (chunk.length > remaining) {
          outputLimited = true;
          stopContainer(false);
          return current + chunk.subarray(0, Math.max(remaining, 0)).toString();
        }
        return current + chunk.toString();
      };

      const timeout = setTimeout(() => stopContainer(true), runTimeout);
      child.stdout.on("data", (chunk: Buffer) => { stdout = appendOutput(stdout, chunk); });
      child.stderr.on("data", (chunk: Buffer) => { stderr = appendOutput(stderr, chunk); });
      child.once("error", (error) => {
        clearTimeout(timeout);
        reject(error);
      });
      child.once("close", () => {
        clearTimeout(timeout);
        if (forceKillTimer) clearTimeout(forceKillTimer);
        resolve({ stdout, stderr, timedOut, outputLimited });
      });
      child.stdin.end(source);
    },
  );
}

export async function POST(request: Request) {
  let payload: { section?: unknown; slug?: unknown };
  try {
    const reader = request.body?.getReader();
    if (!reader) throw new Error("Missing request body.");
    const chunks: Uint8Array[] = [];
    let size = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > 1024) {
        await reader.cancel();
        return NextResponse.json({ error: "Invalid request." }, { status: 413 });
      }
      chunks.push(value);
    }
    payload = JSON.parse(Buffer.concat(chunks).toString("utf8"));
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (typeof payload.section !== "string" || typeof payload.slug !== "string") {
    return NextResponse.json({ error: "Choose a valid code example." }, { status: 400 });
  }
  const topic = getTopic(payload.section, payload.slug);
  const codeToRun = topic?.run ?? topic?.code;
  if (!topic || !codeToRun) {
    return NextResponse.json({ error: "This topic has no runnable code example." }, { status: 404 });
  }
  if (activeRuns >= 2) {
    return NextResponse.json({ error: "The Java runner is busy. Try again shortly." }, { status: 429 });
  }

  const source = codeToRun.join("\n");
  const prepared = prepareJavaSource(source);
  activeRuns++;
  try {
    const result = await executeInDocker(prepared.source, prepared.fileName, prepared.mainClass);
    if (result.timedOut || result.outputLimited) {
      return NextResponse.json({
        ...result,
        stderr: result.outputLimited ? "Output limit reached." : "Execution timed out.",
      });
    }
    return NextResponse.json(result);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown runner error.";
    const unavailable = error instanceof Error && "code" in error && error.code === "ENOENT";
    return NextResponse.json(
      { error: unavailable ? "Docker is unavailable. Start Docker and build the java-notes-runner image." : message },
      { status: unavailable ? 503 : 500 },
    );
  } finally {
    activeRuns--;
  }
}
