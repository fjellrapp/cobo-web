<script lang="ts">
	import SignIn from '$lib/modules/auth/SignIn.svelte';
	import { user } from '$lib/stores/user_store';
	import type { User } from '$lib/utils/interfaces/user';
	import axios from 'axios';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	let authenticated = false;
	let ready = false;
	let currentUser: User;

	const validateToken = async () => {
		console.log(data);
		if (data?.token) {
			const userResponse = await axios.get('api/user/current');
			if (userResponse.data) {
				currentUser = userResponse.data;
				authenticated = true;
			}
		}
	};

	user.subscribe((state) => {
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
<div class="flex flex-col justify-center gap-5">
	{#if !authenticated && ready}
		<SignIn />
	{:else}
		<p>Authenticated</p>
	{/if}
</div>

<style>
</style>
