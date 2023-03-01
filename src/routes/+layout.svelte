<script lang="ts">
	import Toaster from '$lib/components/toaster/Toaster.svelte';
	import Nav from '$lib/modules/Navigation/Nav.svelte';
	import UserGateway from '$lib/modules/UserGateway/UserGateway.svelte';
	import './../tailwind.scss';
</script>

<div class="app">
	<main class="layout">
		<Nav />
		<div class="flex flex-col gap-2">
			<UserGateway />
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
