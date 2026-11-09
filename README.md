# java notes

Next.js (App Router, TypeScript, Tailwind CSS v4) site built from the lecture slides.

## Run
```
npm install
npm run dev
```
Open http://localhost:3000

## Run Java examples
The Run button compiles and executes the topic's saved code in an isolated Docker container. Install and start Docker, then build the runner image once:
```
docker build -t java-notes-runner -f docker/java-runner.Dockerfile .
```
The runner has no network access, a read-only filesystem, limited CPU/memory/processes, and a short execution timeout. Code is selected by topic on the server; the API does not accept arbitrary source code.

## Add content
- New topic: add an object to `content/topics.ts` (`section`, `slug`, `title`, plus optional `code`, `run`, `points`, `callout`, `visual`, `tip`). Use `run` when the displayed code is a fragment and needs a complete Java program for execution.
- New section: add it to `sections` in `content/index.ts`, then add topics with that `section`.

## Reusable components (`components/`)
Styled with Tailwind utility classes; theme colours (`brand`, `tint`, `soft`, `ink`) live in `app/globals.css`.

`Card`, `Callout`, `CodeBlock`, `ArrayBoxes`, `DataTable`, `Tree`, `Tag`, `Rule`, `TopicSidebar`, `PrevNext`, and `TopicView` (renders a whole topic). Import them with `import { Card } from "@/components"`.
