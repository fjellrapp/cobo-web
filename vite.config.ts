import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

/// <reference types="histoire" />
const config: UserConfig = {
	plugins: [sveltekit()],
};
export default config;
