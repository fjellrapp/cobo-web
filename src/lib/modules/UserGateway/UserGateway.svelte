<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/components/button/Button.svelte';
	import { ButtonTypeEnum } from '$lib/components/button/types';
	import User from '$lib/components/icons/User.svelte';
	import LoaderShimmer from '$lib/components/loaders/LoaderShimmer/LoaderShimmer.svelte';
	import { userStore } from '$lib/stores/user_store';

	userStore.subscribe((value) => console.log('value', value));
</script>

<div class="flex h-24  w-full flex-col content-center items-end justify-center p-4">
	{#if !$userStore.user}
		<LoaderShimmer twWidth="w-1/12" twHeight="h-8" />
	{:else}
		<Button
			twClasses="w-1/12 text-black"
			componentType={ButtonTypeEnum.PLAIN}
			afterIcon={User}
			on:click={() => goto('/profile')}>{$userStore.user?.firstName}</Button
		>
	{/if}
</div>
