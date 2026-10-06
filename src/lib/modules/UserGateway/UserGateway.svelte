<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '#lib/components/button/Button.svelte';
	import { ButtonTypeEnum } from '#lib/components/button/types';
	import UserIcon from '#lib/components/icons/UserIcon.svelte';
	import LoaderShimmer from '#lib/components/loaders/LoaderShimmer/LoaderShimmer.svelte';
	import { userStore } from '#lib/stores/user_store';
	import type { User } from '#lib/utils/models/interfaces/user';

	let { data }: { data: { user: User | null; route: { id: string | null } } } = $props();
</script>

<div class="flex h-24 w-full flex-col content-center items-end justify-center p-4">
	{#if !$userStore.user && !data.user}
		<LoaderShimmer width="w-1/12" height="h-8" />
	{:else}
		<Button
			twClasses="w-1/12 text-black"
			componentType={ButtonTypeEnum.PLAIN}
			afterIcon={UserIcon}
			active={data.route.id === '/profile'}
			onclick={() => goto('/profile')}>{data.user?.firstName}</Button
		>
	{/if}
</div>
