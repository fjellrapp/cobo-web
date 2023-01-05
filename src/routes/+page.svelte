<script lang="ts">
	import SignIn from '$lib/modules/auth/SignIn.svelte';
	import { user } from '$lib/stores/user_store';
	import type { User } from '$lib/utils/interfaces/user';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	let authenticated = false;
	let ready = false;
	let currentUser: User;
	export let pageData: PageData;

	const getCurrentUser = () => {
		console.log(pageData.token);
	};

	user.subscribe((state) => {
		if (state.user) {
			currentUser = state.user;
			authenticated = true;
		}
	});

	onMount(async () => {
		if (!authenticated) {
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
