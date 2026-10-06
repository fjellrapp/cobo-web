# SvelteKit 3 and Svelte 5 Migration Design

## Goal

Upgrade Cobo Web to the current stable SvelteKit and Svelte releases, migrate the application and component stories to Svelte 5 APIs, and retain a usable component story catalog.

## Scope

- Upgrade SvelteKit, Svelte, Vite, the Svelte Vite plugin, adapter, TypeScript, and related check/build tooling to mutually compatible current stable versions.
- Require Node.js `>=22.17`, as required by the selected SvelteKit/Vite toolchain, and document that requirement.
- Migrate app and story components from legacy Svelte APIs to Svelte 5 APIs: `$state` and `$derived` for reactive state, `$props` for component props, callback props for component events, event attributes in place of event directives, and snippets in place of slots.
- Replace the Histoire integration with Storybook 10's SvelteKit integration, preserving the existing component stories and providing working development and production story scripts.
- Use pnpm as the authoritative package manager, regenerate `pnpm-lock.yaml`, and remove the stale `yarn.lock` to prevent ambiguous dependency installs.
- Preserve application behavior and existing component interactions while keeping unrelated refactoring out of scope.
- Leave pre-existing user changes untouched, including the existing modification to `src/routes/api/auth/signup/+server.ts`.

## Approach

First align package metadata, supported Node version, SvelteKit/Vite configuration, and lint/format/check tooling with the latest compatible stable releases. Then migrate existing components, routes, and stories to Svelte 5 APIs, preserving public component behavior. Replace Histoire with Storybook's SvelteKit integration and make sure the current story catalog remains runnable. Regenerate the pnpm lockfile only after the dependency set and source migrations are established.

## Compatibility and Risks

- SvelteKit 3 and Vite 8 require Node.js `>=22.17`; consumers and CI must use a compatible Node release.
- Existing Histoire Svelte plugin peer dependencies stop at Svelte 4, so it cannot be retained as a supported Svelte 5 story runner. Storybook 10 is selected to preserve stories.
- Storybook is a new dependency and configuration surface. Its SvelteKit integration, Vite 8 compatibility, story discovery, and production build must be verified as part of the migration.
- The existing `felte` dependency supports Svelte 5, but its Yup validator declares Yup `>=1.2.0` while the project currently uses Yup 0.32. The dependency pair must be aligned or replaced only if installation/checks demonstrate the current pair is invalid.
- The repository contains both a stale `yarn.lock` and `pnpm-lock.yaml`; pnpm is the selected source of truth.

## Validation

- Install dependencies from the regenerated pnpm lockfile using the declared Node requirement.
- Run SvelteKit sync and `svelte-check` with the project's TypeScript configuration.
- Run lint and formatting checks with Svelte 5-compatible ESLint and Prettier plugins.
- Run the Storybook development/build checks and verify the existing component stories are discoverable.
- Run the production Vite/SvelteKit build.
- Review the final diff to ensure the pre-existing signup-handler modification was not altered as part of this work.
