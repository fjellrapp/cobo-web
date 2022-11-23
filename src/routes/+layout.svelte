<script lang="ts">
	import Nav from '$lib/modules/Navigation/Nav.svelte';
	import type { PageData } from './$types';
	import './../tailwind.scss';
	import { page } from '$app/stores';
	export let data: PageData;
	export let isAuthenticated = false;
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
