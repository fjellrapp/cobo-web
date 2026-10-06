import type { Meta, StoryObj } from '@storybook/sveltekit';
import LoaderSpinnerGallery from './LoaderSpinnerGallery.svelte';

const meta = {
	title: 'Components/Loaders/Spinner',
	component: LoaderSpinnerGallery
} satisfies Meta<typeof LoaderSpinnerGallery>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
