<script lang="ts">
	import classNames from 'classnames';

	export let href: string;
	export let title: string;
	export let classes: string | null = null;
	export let iconBefore: ConstructorOfATypedSvelteComponent | null = null;
	export let iconAfter: ConstructorOfATypedSvelteComponent | null = null;
</script>

<a {href} {title} class={classNames({ classes }, 'base')}>
	{#if iconBefore}
		<svelte:component this={iconBefore} />
	{/if}
	<slot />
	{#if iconAfter}
		<svelte:component this={iconAfter} />
	{/if}
</a>

<style>
	.base {
		@apply text-blue-500 underline transition-colors ease-in;
		/** hover */
		@apply hover:text-blue-700;
	}
</style>
