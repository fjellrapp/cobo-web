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
<div class="flex content-center items-center justify-evenly">
	{#if !authenticated}
		<SignIn />
	{/if}
	<IntroIllustration />
</div>

<style>
</style>
