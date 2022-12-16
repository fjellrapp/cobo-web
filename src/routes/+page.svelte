<script lang="ts">
	import { getUser } from '$lib/hooks/users';
	import SignIn from '$lib/modules/auth/SignIn.svelte';
	import { user } from '$lib/stores/user_store';
	import type { User } from '$lib/utils/interfaces/user';
	import { onMount } from 'svelte';

	let authenticated = false;
	let currentUser: User;

	user.subscribe((state) => {
		if (state?.user) {
			currentUser = state.user;
			authenticated = true;
		}
	});

	onMount(() => {
		if (!authenticated) {
		}
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
<div class="flex flex-col justify-center gap-5">
	{#if !authenticated}
		<SignIn />
	{:else}
		<p>Authenticated</p>
	{/if}
</div>

<style>
</style>
