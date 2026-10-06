<script lang="ts">
	import type { Snippet } from 'svelte';
	let { type = 'p', children }: { type?: 'p' | 'strong' | 'i' | 'small'; children?: Snippet } =
		$props();
</script>

<svelte:element this={type} class=" break-keep">
	{@render children?.()}
</svelte:element>
