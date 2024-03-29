/// <reference types="histoire" />
import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import path from 'path';

const config: UserConfig = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$lib: path.resolve(__dirname, './src/lib')
		}
	}
};
export default config;
