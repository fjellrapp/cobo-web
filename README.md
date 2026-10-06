# Cobo web

This is a Sveltekit respository for the Cobo web frontend.

## Developing

Use Node.js 22.17 or newer and pnpm to install dependencies and start the development server:

```bash
pnpm install
pnpm dev

# or start the server and open the app in a new browser tab
pnpm dev -- --open
```

Set `API_BASE_URL` in `.env` to the URL of the Cobo API before running checks or builds. `.env.example` documents the required variable.

## Building

To create a production version of your app:

```bash
pnpm build
```

Run `pnpm check` for Svelte and TypeScript diagnostics. Start the component catalog with `pnpm story:dev` and build it with `pnpm story:build`.
