import type { Meta, StoryObj } from '@storybook/sveltekit';
import LoaderShimmerGallery from './LoaderShimmerGallery.svelte';

const meta = {
	title: 'Components/Loaders/Shimmer',
	component: LoaderShimmerGallery
} satisfies Meta<typeof LoaderShimmerGallery>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
