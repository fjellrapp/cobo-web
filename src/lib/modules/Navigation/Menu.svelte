<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
	import BellIcon from '$lib/components/icons/BellIcon.svelte';
	import ChartPieIcon from '$lib/components/icons/ChartPieIcon.svelte';
	import ClipboardIcon from '$lib/components/icons/ClipboardIcon.svelte';
	import HomeIcon from '$lib/components/icons/HomeIcon.svelte';
	import MailIcon from '$lib/components/icons/MailIcon.svelte';

	import { page } from '$app/stores';

	let activeRoute: string;
	page.subscribe((p) => {
		if (p.route.id) {
			activeRoute = p.route.id;
		}
	});
</script>

<div class="menu-items">
	<Button iconOnly beforeIcon={HomeIcon} title="Hjem" active={activeRoute === '/'} />
	<Button
		iconOnly
		beforeIcon={ClipboardIcon}
		title="Gjøremål"
		active={activeRoute === '/gjoremol'}
	/>
	<Button
		iconOnly
		beforeIcon={BellIcon}
		title="Påminnelser"
		active={activeRoute === '/paaminnelser'}
	/>
	<Button iconOnly beforeIcon={MailIcon} title="Meldinger" active={activeRoute === 'meldinger'} />
	<Button
		iconOnly
		beforeIcon={ChartPieIcon}
		title="Statistikk"
		active={activeRoute === 'statistikk'}
	/>
</div>

<style>
	.menu-items {
		@apply flex flex-col gap-2;
	}
</style>
