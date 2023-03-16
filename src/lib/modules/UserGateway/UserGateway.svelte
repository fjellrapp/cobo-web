<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/components/button/Button.svelte';
	import { ButtonTypeEnum } from '$lib/components/button/types';
	import User from '$lib/components/icons/User.svelte';
	import LoaderShimmer from '$lib/components/loaders/LoaderShimmer/LoaderShimmer.svelte';
	import { userStore } from '$lib/stores/user_store';
	import type { PageData } from '.svelte-kit/types/src/routes/$types';

	export let data: PageData;
</script>

<div class="flex h-24  w-full flex-col content-center items-end justify-center p-4">
	{#if !$userStore.user && !data.user}
		<LoaderShimmer twWidth="w-1/12" twHeight="h-8" />
	{:else}
		<Button
			twClasses="w-1/12 text-black"
			componentType={ButtonTypeEnum.PLAIN}
			afterIcon={User}
			active={data.route.id === '/profile'}
			on:click={() => goto('/profile')}>{data.user?.firstName}</Button
		>
	{/if}
</div>
