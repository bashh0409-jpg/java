# java notes

Next.js (App Router, TypeScript, Tailwind CSS v4) site built from the lecture slides.

## Run
```
npm install
npm run dev
```
Open http://localhost:3000

## Example outputs
The Show output button displays the saved sample output for each code topic. It does not execute Java or require Docker.

## Add content
- New topic: add an object to `content/topics.ts` (`section`, `slug`, `title`, plus optional `code`, `output`, `points`, `callout`, `visual`, `tip`).
- New section: add it to `sections` in `content/index.ts`, then add topics with that `section`.

## Reusable components (`components/`)
Styled with Tailwind utility classes; theme colours (`brand`, `tint`, `soft`, `ink`) live in `app/globals.css`.

`Card`, `Callout`, `CodeBlock`, `ArrayBoxes`, `DataTable`, `Tree`, `Tag`, `Rule`, `TopicSidebar`, `PrevNext`, and `TopicView` (renders a whole topic). Import them with `import { Card } from "@/components"`.
