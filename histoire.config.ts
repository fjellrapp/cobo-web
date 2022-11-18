import { defineConfig } from 'histoire'
import { HstSvelte } from '@histoire/plugin-svelte'

export default defineConfig({
  tree: {
    file: 'title'
  },
  setupFile: './histoire.setup.ts',
  plugins: [
    HstSvelte(),
  ],
})