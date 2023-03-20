<script lang="ts">
	import Text from '$lib/components/primitives/Text.svelte';
	import SignIn from '$lib/modules/auth/SignIn.svelte';
	import { authStore } from '$lib/stores/auth_store';
	import { userStore } from '$lib/stores/user_store';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const validateToken = async () => {
		if (data?.token) {
			authStore.set({ isAuthenticated: true });
			if (data?.user) {
				userStore.set({ user: data.user, loading: false });
			}
		}
		userStore.update((state) => {
			return {
				...state,
				loading: false
			};
		});
	};

	onMount(async () => {
		if (!data.token) {
			await validateToken();
		}
		userStore.set({ user: data.user?.id ? data.user : null, loading: false });
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
<div class="flex w-full flex-col justify-center gap-5">
	{#if !data.token}
		<SignIn />
	{:else}
		<Text>Dashboard</Text>
	{/if}
</div>

<style>
</style>
