<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { BaseIconCssOptions } from '#lib/utils/models/types/baseIcon';
	import classNames from 'classnames';

	let {
		fill = 'none',
		stroke = 'currentColor',
		viewBox = '0 0 24 24',
		width = '1em',
		height = '1em',
		css = { wrapper: '', svg: '' },
		children
	}: {
		fill?: string;
		stroke?: string;
		viewBox?: string;
		width?: string | number;
		height?: string | number;
		css?: BaseIconCssOptions;
		children?: Snippet;
	} = $props();
</script>

<div class={classNames(css.wrapper, 'icon-base')}>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class={css.svg}
		{width}
		{height}
		{viewBox}
		{fill}
		{stroke}
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		{@render children?.()}
	</svg>
</div>

<style lang="css">
	.icon-base {
		@apply flex;
	}
</style>
