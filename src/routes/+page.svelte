<script lang="ts">
	import { page } from '$app/stores';
	import IntroIllustration from '$lib/components/illustrations/IntroIllustration.svelte';
	import SignIn from '$lib/modules/auth/SignIn.svelte';

	let authenticated = false;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
<div class="flex flex-col justify-center gap-5">
	{#if !authenticated}
		<SignIn />
	{/if}
</div>

<style>
</style>
