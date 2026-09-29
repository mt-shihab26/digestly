# Project Instructions

- The user edits files concurrently in their editor. Always Read a file immediately before Write/Edit; never reuse earlier content. Don't overwrite or "clean up" structures they just built by hand unless asked.
- Never run `migrate:fresh`, `migrate:refresh`, `db:wipe` or anything that drops/truncates tables without the user's explicit go-ahead at that moment. The DB holds real work; verifying a migration or seeder is not reason enough.
- `composer run dev` (Vite HMR + `php artisan serve`) is always running. Don't run `bun run build` to verify frontend changes; only run it when the user asks for a production build.
- Never run formatters or linters (Pint, PHPStan, Prettier, ESLint, VitePluse, `bun run lint`/`format`) unless the user asks. This overrides Boost's "run Pint before finalizing" rule. The user formats and lints their own code.
- Migrations not on the `prod` branch (`git ls-tree -r prod --name-only -- database/migrations`) may be edited in place instead of adding a follow-up. Re-run them locally afterwards, and fix the local `migrations` table row if renaming/merging files, so the schema matches.
- Never write browser-automation scripts (Playwright, Puppeteer, etc.) to see a page. Diagnose from code, data and `browser-logs`; if you must see it, ask the user for a screenshot.
- Never use Python (inline scripts, heredocs, or otherwise) for anything in this project. Use the editor tools, or plain shell tools like `sed`, for file changes.
- Type React component props inline in the component signature, e.g. `({ status }: { status?: string }) => ...`. Never declare a separate `type Props` or `interface Props`.
