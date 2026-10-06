import type { Meta, StoryObj } from '@storybook/sveltekit';
import ListGallery from './ListGallery.svelte';

const meta = { title: 'Components/List', component: ListGallery } satisfies Meta<
	typeof ListGallery
>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Items: Story = {};
