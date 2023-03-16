<script lang="ts">
	export let type: 'p' | 'strong' | 'i' | 'small' = 'p';
</script>

<svelte:element this={type} class=" break-keep">
	<slot />
</svelte:element>
