<script lang="ts">
	import { page } from '$app/stores';

	import { authStore } from '$lib/stores/auth_store';
	import { userStore } from '$lib/stores/user_store';
	import Menu from './Menu.svelte';
	import MenuActions from './MenuActions.svelte';
	import MenuUnauth from './MenuUnauth.svelte';
	import NavLoading from './NavLoading.svelte';

	let authenticated = false;
	let activeRoute: string;

	page.subscribe((p) => {
		if (p.route.id) {
			activeRoute = p.route.id;
		}
	});
</script>

<div class="nav">
	<div class="logo">
		<h1 class=" text-xs font-extrabold uppercase">Cobo</h1>
	</div>

	{#if $authStore.isAuthenticated && !$userStore.loading}
		<Menu />
	{:else if $userStore.loading}
		<NavLoading />
	{:else}
		<MenuUnauth {activeRoute} />
	{/if}
	<MenuActions {authenticated} {activeRoute} />
</div>

<style>
	.nav {
		@apply flex h-screen flex-col items-center justify-between gap-xs bg-primaryBg p-3;
	}
	.actions {
		@apply flex flex-col gap-2;
	}
</style>
