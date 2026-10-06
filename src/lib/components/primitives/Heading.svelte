<script lang="ts">
	import type { Snippet } from 'svelte';
	import classNames from 'classnames';

	let {
		tag = 'h1',
		customClass = '',
		children,
		...restProps
	}: {
		tag?: 'h1' | 'h2' | 'h3' | 'h4';
		customClass?: string;
		children?: Snippet;
		[key: string]: unknown;
	} = $props();
	const textSizes = {
		h1: 'text-5xl font-extrabold',
		h2: 'text-4xl font-bold',
		h3: 'text-3xl font-bold',
		h4: 'text-2xl font-bold',
		h5: 'text-xl font-bold',
		h6: 'text-lg font-bold'
	};
</script>

<svelte:element
	this={tag}
	{...restProps}
	class={classNames(
		customClass || textSizes[tag],
		typeof restProps.class === 'string' ? restProps.class : ''
	)}
>
	{@render children?.()}
</svelte:element>
