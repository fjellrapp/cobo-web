<script lang="ts">
	import type { Component, Snippet } from 'svelte';
	import classNames from 'classnames';

	let {
		href,
		title,
		classes = null,
		iconBefore = null,
		iconAfter = null,
		children
	}: {
		href: string;
		title: string;
		classes?: string | null;
		iconBefore?: Component | null;
		iconAfter?: Component | null;
		children?: Snippet;
	} = $props();
</script>

<a {href} {title} class={classNames({ classes }, 'base')}>
	{#if iconBefore}
		{@const Icon = iconBefore}
		<Icon />
	{/if}
	{@render children?.()}
	{#if iconAfter}
		{@const Icon = iconAfter}
		<Icon />
	{/if}
</a>

<style>
	.base {
		@apply text-blue-500 underline transition-colors ease-in;
		/** hover */
		@apply hover:text-blue-700;
	}
</style>
