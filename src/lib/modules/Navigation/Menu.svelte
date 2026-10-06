<script lang="ts">
	import Button from '#lib/components/button/Button.svelte';
	import BellIcon from '#lib/components/icons/BellIcon.svelte';
	import ChartPieIcon from '#lib/components/icons/ChartPieIcon.svelte';
	import ClipboardIcon from '#lib/components/icons/ClipboardIcon.svelte';
	import HomeIcon from '#lib/components/icons/HomeIcon.svelte';
	import MailIcon from '#lib/components/icons/MailIcon.svelte';

	import { page } from '$app/state';
	import { goto } from '$app/navigation';

	const activeRoute = $derived(page.route.id ?? '');
</script>

<div class="menu-items">
	<Button
		iconOnly
		beforeIcon={HomeIcon}
		title="Hjem"
		active={activeRoute === '/'}
		onclick={() => goto('/')}
	/>
	<Button
		iconOnly
		beforeIcon={ClipboardIcon}
		title="Gjøremål"
		active={activeRoute === '/activities'}
		onclick={() => goto('/activities')}
	/>
	<Button
		iconOnly
		beforeIcon={BellIcon}
		title="Påminnelser"
		active={activeRoute === '/reminders'}
		onclick={() => goto('/reminders')}
	/>
	<Button
		iconOnly
		beforeIcon={ChartPieIcon}
		title="Statistikk"
		active={activeRoute === '/statistics'}
		onclick={() => goto('/statistics')}
	/>
</div>

<style>
	.menu-items {
		@apply flex flex-col gap-2;
	}
</style>
