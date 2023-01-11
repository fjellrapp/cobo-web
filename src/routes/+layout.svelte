<script lang="ts">
	import Nav from '$lib/modules/Navigation/Nav.svelte';
	import UserGateway from '$lib/modules/UserGateway/UserGateway.svelte';
	import './../tailwind.scss';
</script>

<div class="app">
	<main class="layout">
		<Nav />
		<div class="flex flex-col gap-2">
			<UserGateway />
			<div class="flex-1">
				<slot />
			</div>
		</div>
	</main>
</div>

<style>
	.layout {
		@apply grid grid-cols-menu-default bg-primaryBg;
	}
</style>
