import type { Meta, StoryObj } from '@storybook/sveltekit';
import InputGallery from './InputGallery.svelte';

const meta = { title: 'Components/Input', component: InputGallery } satisfies Meta<
	typeof InputGallery
>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Variants: Story = {};
