<script lang="ts">
	import Select from '#lib/components/select/Select.svelte';
	import SelectOption from '#lib/components/select/SelectOption.svelte';
	import SelectOptionsWrapper from '#lib/components/select/SelectOptionsWrapper.svelte';
	const values = ['test', 'test1', 'test2'];
</script>

<Select onChange={(value) => console.log('change', value)}>
	{#snippet options({ onSelect })}
		<SelectOptionsWrapper>
			{#each values as value (value)}
				<SelectOption {value} onSelected={onSelect} />
			{/each}
		</SelectOptionsWrapper>
	{/snippet}
</Select>
