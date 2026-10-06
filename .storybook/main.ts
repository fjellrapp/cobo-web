import type { StorybookConfig } from '@storybook/sveltekit';

const config: StorybookConfig = {
	stories: ['../src/stories/**/*.stories.ts'],
	addons: ['@storybook/addon-docs'],
	framework: '@storybook/sveltekit'
};

export default config;
