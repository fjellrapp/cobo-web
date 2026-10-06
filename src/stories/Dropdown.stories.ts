import type { Meta, StoryObj } from '@storybook/sveltekit';
import DropdownGallery from './DropdownGallery.svelte';

const meta = { title: 'Components/Dropdown', component: DropdownGallery } satisfies Meta<
	typeof DropdownGallery
>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
