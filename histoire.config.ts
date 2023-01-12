import { defineConfig } from 'histoire'
import { HstSvelte } from '@histoire/plugin-svelte'

export default defineConfig({
  tree: {
		groups: [
			{
				id: 'top',
				title: ''
			}
		]
	},
  setupFile: './histoire.setup.ts',
  plugins: [
    HstSvelte(),
  ],
})