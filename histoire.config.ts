import { defineConfig } from 'histoire'
import { HstSvelte } from '@histoire/plugin-svelte'

export default defineConfig({

  setupFile: './histoire.setup.ts',
  storyMatch: ['./src/stories/*.story.svelte'],
  plugins: [
    HstSvelte(),
  ],
})