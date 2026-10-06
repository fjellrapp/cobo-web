<script lang="ts">
	import type { Snippet } from 'svelte';
	let { children }: { children?: Snippet } = $props();
</script>

<div class="flex w-full flex-col content-center self-center">
	<div class="flex justify-between">
		{@render children?.()}
	</div>
</div>
