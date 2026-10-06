import type { Meta, StoryObj } from '@storybook/sveltekit';
import IllustrationGallery from './IllustrationGallery.svelte';

const meta = { title: 'Components/Illustrations', component: IllustrationGallery } satisfies Meta<
	typeof IllustrationGallery
>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Intro: Story = {};
