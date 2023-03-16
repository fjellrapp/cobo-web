<script lang="ts">
	import type { BaseIconCssOptions } from "$lib/utils/models/types/baseIcon";
	import classNames from "classnames";


	export let fill: string = 'none';
	export let stroke: string = 'currentColor';
	export let viewBox: string = '0 0 24 24';
	export let width: string | number = '1em';
	export let height: string | number = '1em';
	export let css: BaseIconCssOptions = {
		wrapper: '',
		svg: ''
	};
</script>

<div class={classNames(css.wrapper,'icon-base')}>
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
		<slot />
	</svg>
</div>

<style lang="css">
	.icon-base {
		@apply flex
	}
</style>
