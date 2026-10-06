import type { Meta, StoryObj } from '@storybook/sveltekit';
import SelectGallery from './SelectGallery.svelte';

const meta = { title: 'Components/Select', component: SelectGallery } satisfies Meta<
	typeof SelectGallery
>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Options: Story = {};
