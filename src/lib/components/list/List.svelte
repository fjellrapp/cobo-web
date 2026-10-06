<script lang="ts">
	import type { Snippet } from 'svelte';
	import classNames from 'classnames';

	let {
		select = false,
		children,
		class: className = ''
	}: { select?: boolean; children?: Snippet; class?: string } = $props();
</script>

<ul class={classNames(className)} class:rounded-t-none={select}>
	{@render children?.()}
</ul>
