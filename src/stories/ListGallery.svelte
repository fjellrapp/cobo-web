<script lang="ts">
	import List from '#lib/components/list/List.svelte';
	import ListItem from '#lib/components/list/ListItem.svelte';
</script>

<List class="test">
	{#each ['test-1', 'test-2', 'test-3', 'test-4'] as value (value)}
		<ListItem {value} onChange={(selected) => console.log(selected)} />
	{/each}
</List>
