import type { Meta, StoryObj } from '@storybook/sveltekit';
import IconsGallery from './IconsGallery.svelte';

const meta = { title: 'Components/Icons', component: IconsGallery } satisfies Meta<
	typeof IconsGallery
>;
export default meta;
type Story = StoryObj<typeof meta>;

export const All: Story = {};
