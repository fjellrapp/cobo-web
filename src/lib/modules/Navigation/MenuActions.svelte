<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
	import PlusIcon from '$lib/components/icons/PlusIcon.svelte';
	import CogIcon from '$lib/components/icons/CogIcon.svelte';
	import { ButtonTypeEnum } from '$lib/components/button/types';
	import { goto } from '$app/navigation';

	export let authenticated: boolean;
	export let activeRoute: string | null = null;
</script>

<div class="actions">
	{#if authenticated}
		<Button
			beforeIcon={PlusIcon}
			iconOnly
			active
			componentType={ButtonTypeEnum.SECONDARY}
			title="Legg til hendelse, aktivitet eller andre ting"
		/>
	{/if}
	<Button
		iconOnly
		beforeIcon={CogIcon}
		active={activeRoute === '/settings'}
		title="Innstillinger"
		on:click={() => {
			goto('/settings');
		}}
	/>
</div>
