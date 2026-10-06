// @ts-expect-error @eslint/js does not ship types
import eslint from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import svelte from 'eslint-plugin-svelte';
import storybook from 'eslint-plugin-storybook';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
	globalIgnores([
		'.svelte-kit/**',
		'build/**',
		'dist/**',
		'node_modules/**',
		'storybook-static/**'
	]),
	...svelte.configs['flat/recommended'],
	...storybook.configs['flat/recommended'],
	{ rules: { 'no-unused-vars': 'off', 'no-undef': 'off' } },
	{
		files: ['src/**/*.ts', '*.config.js', '.storybook/*.ts'],
		languageOptions: { parser: tsParser },
		rules: { 'no-undef': 'off', 'no-unused-vars': 'off' }
	},
	{
		files: ['src/**/*.svelte'],
		languageOptions: { parserOptions: { parser: tsParser, extraFileExtensions: ['.svelte'] } }
	}
]);
