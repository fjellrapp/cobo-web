<script lang="ts">
	import Nav from '$lib/modules/Navigation/Nav.svelte';
	import './../tailwind.scss';
</script>

<div class="app">
	<main class="layout">
		<Nav />
		<slot />
	</main>
</div>

<style>
	.layout {
		@apply grid grid-cols-menu-default bg-primaryBg;
	}
</style>
