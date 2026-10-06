import type { Meta, StoryObj } from '@storybook/sveltekit';
import BoxGallery from './BoxGallery.svelte';

const meta = { title: 'Components/Box', component: BoxGallery } satisfies Meta<typeof BoxGallery>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
