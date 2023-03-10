<script lang="ts">
	import SignIn from '$lib/modules/auth/SignIn.svelte';
	import { authStore } from '$lib/stores/auth_store';
	import { userStore } from '$lib/stores/user_store';
	import type { User } from '$lib/utils/interfaces/user';
	import axios from 'axios';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	let authenticated = false;
	let ready = false;
	let currentUser: User;

	const validateToken = async () => {
		if (data?.token) {
			authStore.set({ isAuthenticated: true });
			const userResponse = await axios.get('api/user/current');
			if (userResponse.data) {
				userStore.set({ user: userResponse.data });
			}
		}
	};

	userStore.subscribe((state) => {
		if (state.user) {
			currentUser = state.user;
			authenticated = true;
		}
	});

	onMount(async () => {
		if (!authenticated) {
			await validateToken();
		}
		ready = true;
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
<div class="flex w-full flex-col justify-center gap-5">
	{#if !authenticated && ready}
		<SignIn />
	{:else}
		<p>Authenticated {currentUser?.firstName ?? ''}</p>
	{/if}
</div>

<style>
</style>
