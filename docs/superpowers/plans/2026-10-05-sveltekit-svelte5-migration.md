# SvelteKit 3 and Svelte 5 Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade the project to current stable SvelteKit 3/Svelte 5, migrate application and story components to Svelte 5 APIs, replace Histoire with Storybook, and make pnpm the sole package manager.

**Architecture:** Upgrade the mutually compatible Node/SvelteKit/Vite/tooling stack first, then migrate leaf UI components and their existing stories before route/layout consumers. Use Svelte 5 props, runes, callback props, event attributes, and snippets without changing interaction behavior. Replace the Histoire configuration with Storybook's SvelteKit integration, then regenerate and validate the pnpm lockfile.

**Tech Stack:** Node.js >=22.17, pnpm, SvelteKit 3, Svelte 5, Vite 8, TypeScript 6, Storybook 10 with SvelteKit integration.

---

## File Map

- Modify `package.json`: compatible scripts and runtime/tooling dependencies.
- Modify `pnpm-lock.yaml`: regenerated pnpm dependency graph.
- Delete `yarn.lock`: eliminate the competing stale lockfile.
- Add `.nvmrc` containing `22.17` (or a newer compatible Node 22 release) and document the Node requirement and pnpm workflow in `README.md`.
- Modify `svelte.config.js`, `vite.config.ts`, `tsconfig.json`, `.eslintrc.cjs`, and `.prettierrc`: align framework integration, type configuration, linting, and formatting with the upgraded stack.
- Delete `histoire.config.ts` and `histoire.setup.ts`; add `.storybook/main.ts`, `.storybook/preview.ts`, and any minimal Storybook SvelteKit configuration required by the installed Storybook 10 integration.
- Convert all components under `src/lib/components/` and their consumers under `src/lib/modules/` and `src/routes/` from legacy component APIs.
- Convert the existing stories under `src/stories/` to Storybook CSF stories, preserving coverage for button, input, select, list, box, dropdown, icons, illustrations, and loaders.
- Do not edit `src/routes/api/auth/signup/+server.ts` as part of this migration; it has an unrelated pre-existing user modification.

## Task 1: Establish Current Baseline and Node Requirement

**Files:**
- Create: `.nvmrc`
- Modify: `README.md`

- [ ] **Step 1: Verify the supported local runtime and baseline checks**

Run `node --version`, `pnpm --version`, `pnpm check`, and `pnpm build` before changing dependencies. Record existing failures separately from migration failures. Confirm Node is at least `v22.17.0`.

- [ ] **Step 2: Declare the minimum Node release**

Create `.nvmrc` containing `22.17` and add an `engines.node` entry of `>=22.17.0` to `package.json` in Task 2. Update README setup instructions to use pnpm and mention the Node requirement.

- [ ] **Step 3: Re-run baseline after documenting the runtime**

Run `node --version` and confirm it satisfies `.nvmrc`. Do not change application code in this task.

## Task 2: Upgrade Framework and Svelte Tooling

**Files:**
- Modify: `package.json`
- Modify: `svelte.config.js`
- Modify: `vite.config.ts`
- Modify: `tsconfig.json`
- Modify: `.eslintrc.cjs`
- Modify: `.prettierrc`
- Modify: `README.md`

- [ ] **Step 1: Record package compatibility constraints**

Before editing the manifest, check current stable peer dependencies and engine requirements for `@sveltejs/kit`, `svelte`, `@sveltejs/adapter-auto`, `@sveltejs/vite-plugin-svelte`, `vite`, `svelte-check`, TypeScript, Storybook, and its SvelteKit integration. Keep versions mutually compatible and satisfy Node >=22.17.

- [ ] **Step 2: Update framework and package scripts**

Set the compatible stable versions of SvelteKit, Svelte, adapter-auto, Svelte Vite plugin, Vite, TypeScript, and svelte-check. Add `engines.node: ">=22.17.0"`. Replace Histoire scripts with Storybook development/build scripts. Remove obsolete Svelte 3-era `svelte-loader`, `svelte-preprocess` if no remaining consumer requires them, `eslint-plugin-svelte3`, and incompatible Histoire packages. Keep `sass` and PostCSS support used by application styles.

- [ ] **Step 3: Adopt Svelte 5-compatible ESLint and Prettier integrations**

Replace `eslint-plugin-svelte3` and its processor configuration with a Svelte 5-compatible ESLint setup. Upgrade Prettier and `prettier-plugin-svelte` to compatible current releases; remove deprecated Svelte-specific options that no longer exist. Keep the project's tab, quote, and trailing-comma conventions.

- [ ] **Step 4: Simplify the Vite/SvelteKit configuration**

Use the current SvelteKit Vite plugin and supported Vite configuration types. Remove the redundant `$lib` alias if it duplicates SvelteKit's generated aliases; retain any alias that is demonstrably project-specific. Update Svelte config only where the new compiler/tooling requires it, preserving adapter-auto and PostCSS behavior.

- [ ] **Step 5: Install and resolve dependency incompatibilities**

Run `pnpm install` to update the lockfile. Check for peer dependency failures. The current `@felte/validator-yup` requires Yup >=1.2 while the manifest uses Yup 0.32; align Yup and the validator only if the install or type check confirms the incompatibility, and verify existing form validation APIs still work.

- [ ] **Step 6: Synchronize and check the upgraded toolchain**

Run `pnpm exec svelte-kit sync` and `pnpm exec svelte-check --tsconfig ./tsconfig.json`. Address configuration/tooling errors before component migration. Legacy Svelte syntax warnings may remain temporarily and are resolved in later tasks.

## Task 3: Convert Primitive and Leaf Components to Svelte 5

**Files:**
- Modify: `src/lib/components/button/Button.svelte`
- Modify: `src/lib/components/box/Box.svelte`
- Modify: `src/lib/components/card/Card.svelte`
- Modify: `src/lib/components/dropdown/dropdown.svelte`
- Modify: `src/lib/components/icons/**/*.svelte`
- Modify: `src/lib/components/illustrations/IntroIllustration.svelte`
- Modify: `src/lib/components/layouts/UnauthPageLayout.svelte`
- Modify: `src/lib/components/link/Link.svelte`
- Modify: `src/lib/components/loaders/**/*.svelte`
- Modify: `src/lib/components/primitives/Heading.svelte`
- Modify: `src/lib/components/primitives/Text.svelte`
- Modify: `src/lib/components/toaster/Toaster.svelte`
- Modify: `src/stories/StoryWrapper/StoryWrapper.svelte`

- [ ] **Step 1: Capture existing public component behavior in stories**

Before changing component APIs, preserve the current button, box, card, dropdown, icons, illustration, loaders, text, heading, link, and toaster examples when converting the story catalog in Task 6. Treat the existing markup, labels, class application, and interactions as characterization requirements.

- [ ] **Step 2: Convert component props to `$props()`**

Replace `export let` declarations with typed `$props()` destructuring, preserving defaults and exported prop names. Replace component-constructor annotations with Svelte 5 `Component` types where dynamic components remain necessary.

- [ ] **Step 3: Convert children slots to snippets**

Replace default `<slot />` usage in `Text.svelte`, `Heading.svelte`, `Link.svelte`, `UnauthPageLayout.svelte`, and the story wrapper with an optional `children: Snippet` prop and `{@render children?.()}`. Replace named slot use elsewhere with explicitly named snippet props and render points.

- [ ] **Step 4: Convert dynamic component rendering**

Replace `<svelte:component this={...} />` with Svelte 5 dynamic component rendering. Preserve conditional rendering when an icon or component prop is `null`.

- [ ] **Step 5: Convert event attributes in leaf components**

Replace legacy `on:click` forwarding in `Button.svelte` and `Toaster.svelte` with Svelte 5 event attributes/rest-prop forwarding. Keep native event types and ensure consumer-provided handlers still receive the event once.

- [ ] **Step 6: Verify leaf components**

Run `pnpm check` and `pnpm lint`. Build the affected stories after Task 6 is available; until then, keep changes compiling with temporary legacy stories accepted by the Svelte compiler.

## Task 4: Convert Stateful Inputs, Selects, and Lists

**Files:**
- Modify: `src/lib/components/input/Input.svelte`
- Modify: `src/lib/components/select/Select.svelte`
- Modify: `src/lib/components/select/SelectOption.svelte`
- Modify: `src/lib/components/select/SelectOptionsWrapper.svelte`
- Modify: `src/lib/components/list/List.svelte`
- Modify: `src/lib/components/list/ListItem.svelte`

- [ ] **Step 1: Define callback-based event contracts**

Replace `createEventDispatcher` with typed callback props. Preserve the input callbacks and payloads (`inputChange`, `hasValue`, `enter`) and select/list change values. Update caller names only where needed to make callback semantics explicit.

- [ ] **Step 2: Convert input state and event handlers**

Use `$props()` for input options and `$state()` for locally owned reactive state. Use Svelte 5 DOM event attributes and typed current-target access. Preserve input values, disabled/required behavior, key handling, and all callback payload shapes.

- [ ] **Step 3: Convert select and list state/slots**

Use `$state()` for local open/selection state, `$derived()` for computed labels/classes, and `$props()` for inputs. Replace named select slots with `Snippet` props and render them with `{@render ...?.()}`. Replace child-to-parent dispatch with callback props.

- [ ] **Step 4: Verify input/select/list contracts**

Run `pnpm check`, then run `pnpm story:build` after Task 6. Verify the input story reports text/value and enter behavior, select options invoke the selected-value callback, and list interactions preserve selected values.

## Task 5: Convert Routes and Application Modules

**Files:**
- Modify: `src/routes/+layout.svelte`
- Modify: `src/routes/+page.svelte`
- Modify: `src/routes/profile/+page.svelte`
- Modify: `src/lib/modules/auth/SignIn.svelte`
- Modify: `src/lib/modules/auth/RegisterUser.svelte`
- Modify: `src/lib/modules/UserGateway/UserGateway.svelte`
- Modify: `src/lib/modules/Navigation/MenuUnauth.svelte`
- Modify: `src/lib/modules/Navigation/Menu.svelte`
- Modify: `src/lib/modules/Navigation/MenuActions.svelte`
- Modify: `src/lib/modules/Navigation/Nav.svelte`
- Modify: `src/lib/modules/Navigation/NavLoading.svelte`
- Modify: `src/lib/modules/Panes/SettingsPane/SettingsPane.svelte`

- [ ] **Step 1: Convert route and module props**

Replace route `export let data` declarations with typed `$props()` and generated `PageData`/`LayoutData` types as appropriate. Convert module props such as `authenticated` and `activeRoute` the same way.

- [ ] **Step 2: Convert app-owned reactive variables**

For component-local variables that are read by markup and later reassigned, use `$state()`. Use `$derived()` for computed state instead of legacy `$:` declarations. Keep store subscriptions where stores remain the application state mechanism.

- [ ] **Step 3: Update SvelteKit page state access**

Replace deprecated `$app/stores` `page` imports in navigation components with `$app/state` and use the current page state shape. Preserve route highlighting and navigation destinations.

- [ ] **Step 4: Convert event handlers and component callbacks**

Replace `on:` directives with event attributes, remove event modifiers using explicit handler logic where required, and update `Input`/`Button` consumers to use callback props from Tasks 3-4. Preserve form submission prevention, keyboard submit behavior, auth calls, and navigation.

- [ ] **Step 5: Verify app route behavior and types**

Run `pnpm check` and `pnpm build`. Confirm generated route types are current and the auth/profile/home routes compile without legacy API warnings.

## Task 6: Replace Histoire Stories with Storybook

**Files:**
- Create: `.storybook/main.ts`
- Create: `.storybook/preview.ts`
- Create or modify: Storybook CSF story files corresponding to all existing `src/stories/**/*.story.svelte`
- Delete: `histoire.config.ts`
- Delete: `histoire.setup.ts`
- Delete or replace: `src/stories/StoryWrapper/StoryWrapper.svelte`
- Modify: `package.json`

- [ ] **Step 1: Configure Storybook 10 for SvelteKit**

Use `@storybook/sveltekit` with the Vite 8-compatible Storybook 10 release. Add the minimal `.storybook/main.ts` configuration with the `@storybook` framework, stories glob, and addons actually used. Add `.storybook/preview.ts` to load the app's global Tailwind stylesheet and shared preview parameters.

- [ ] **Step 2: Convert each existing story to CSF**

Create Storybook story modules for button, input, select, list, box, dropdown, icons, illustrations, and both loader components. Use Svelte component args/controls supported by Storybook 10 and retain existing example variants and handlers. Use render functions/snippets rather than Histoire's `Hst` component syntax.

- [ ] **Step 3: Remove Histoire configuration and scripts**

Remove `@histoire/plugin-svelte`, `histoire`, `histoire.config.ts`, `histoire.setup.ts`, and obsolete `story:preview` behavior. Set `story:dev` to `storybook dev -p 6006` and `story:build` to `storybook build`.

- [ ] **Step 4: Verify catalog discovery and build**

Run `pnpm story:build`. Confirm all nine story categories are discovered and there are no Svelte component compatibility or missing-style errors. Fix the CSF configuration rather than suppressing peer/compiler errors.

## Task 7: Convert Remaining Svelte Files and Eliminate Legacy APIs

**Files:**
- Modify any remaining Svelte files identified by the legacy API search in `src/**/*.svelte`.
- Modify: `src/stories/**/*.svelte` only if Storybook still uses Svelte-authored story helpers.

- [ ] **Step 1: Search for remaining legacy APIs**

Run a source-only search for `export let`, `createEventDispatcher`, `on:`, `on:click`, `on:input`, `on:keyup`, `on:submit`, `<slot`, `<svelte:component`, `$:`, and `$app/stores` under `src`.

- [ ] **Step 2: Convert each remaining use based on its contract**

Use `$props()` for props; `$state()`/`$derived()` for reactive state; callback props for component events; event attributes for DOM and component handlers; snippets for children content; and `$app/state` for current page state. Do not mechanically replace store declarations or server-side SvelteKit load/action handlers.

- [ ] **Step 3: Confirm the legacy API search is clean**

Repeat the search and confirm there are no unintended legacy component APIs in application or story source. Explain any intentionally retained Svelte 5 compatibility syntax in the final report.

## Task 8: Make pnpm the Sole Lockfile and Update Setup Docs

**Files:**
- Modify: `package.json`
- Modify: `pnpm-lock.yaml`
- Delete: `yarn.lock`
- Modify: `README.md`
- Create: `.nvmrc`

- [ ] **Step 1: Set package manager metadata**

Set `packageManager` in `package.json` to the active pnpm version used to generate the lockfile, and ensure the Node engine and scripts match the approved design.

- [ ] **Step 2: Regenerate the lockfile deterministically**

Run `pnpm install` on Node >=22.17. Remove `yarn.lock`. Then run `pnpm install --frozen-lockfile` to verify the manifest and pnpm lockfile agree.

- [ ] **Step 3: Document install and dev commands**

Update README instructions to use `pnpm install`, `pnpm dev`, `pnpm build`, `pnpm check`, and `pnpm story:dev`. State Node.js >=22.17 and that pnpm is required.

## Task 9: Full Verification and User-Change Safety Review

**Files:**
- Verify all migration files; do not edit unrelated pre-existing changes.

- [ ] **Step 1: Run format and lint checks**

Run `pnpm lint`. Resolve formatting, ESLint, and Svelte diagnostics without broad unrelated reformatting.

- [ ] **Step 2: Run type and production builds**

Run `pnpm check`, `pnpm build`, and `pnpm story:build` from a clean generated `.svelte-kit` state.

- [ ] **Step 3: Verify dependency and source state**

Run `pnpm install --frozen-lockfile`; verify SvelteKit/Svelte/Vite versions with `pnpm list @sveltejs/kit svelte vite`; verify only `pnpm-lock.yaml` exists as a package lockfile; and repeat the legacy API search.

- [ ] **Step 4: Review the final diff and preserve the existing user change**

Run `git status --short` and `git diff -- src/routes/api/auth/signup/+server.ts`. Confirm that file's pre-existing user diff remains unchanged and unstaged/unmodified by this migration. Summarize any verification that cannot run in the local environment.
