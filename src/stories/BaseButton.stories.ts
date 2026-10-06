import type { Meta, StoryObj } from '@storybook/sveltekit';
import ButtonGallery from './ButtonGallery.svelte';

const meta = { title: 'Components/Button', component: ButtonGallery } satisfies Meta<
	typeof ButtonGallery
>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Variants: Story = {};
