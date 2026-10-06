<script lang="ts">
	import type { Snippet } from 'svelte';
	let { extendCss = '', children }: { extendCss?: string; children?: Snippet } = $props();
</script>

<div class={`box ${extendCss} bg-slate-900`}>
	{@render children?.()}
</div>

<style>
	.box {
		@apply w-fit rounded-lg  bg-primaryBg p-8 shadow-md;
	}
</style>
