<script lang="ts">
	import Toaster from '$lib/components/toaster/Toaster.svelte';
	import Nav from '$lib/modules/Navigation/Nav.svelte';
	import UserGateway from '$lib/modules/UserGateway/UserGateway.svelte';
	import type { PageData } from './$types';
	import './../tailwind.scss';

	export let data: PageData;
</script>

<div class="app">
	<main class="layout">
		<Nav {data} />
		<div class="flex flex-col gap-2">
			{#if data.user?.id}
				<UserGateway {data} />
			{/if}
			<div class="container flex flex-1 self-center px-8">
				<slot />
			</div>
		</div>
		<Toaster />
	</main>
</div>

<style>
	.layout {
		@apply grid grid-cols-menu-default bg-primaryBg;
	}
</style>
