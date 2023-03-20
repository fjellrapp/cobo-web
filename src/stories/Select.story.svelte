<script lang="ts">
	import Select from '$lib/components/select/Select.svelte';
	import SelectOption from '$lib/components/select/SelectOption.svelte';
	import SelectOptionsWrapper from '$lib/components/select/SelectOptionsWrapper.svelte';
	import type { Hst } from '@histoire/plugin-svelte';
	import StoryWrapper from './StoryWrapper/StoryWrapper.svelte';

	let values: string[] = ['test', 'test1', 'test2'];
	export let Hst: Hst;
</script>

<Hst.Story>
	<StoryWrapper>
		<Select onChange={(value) => console.log('change', value)}>
			<div class="flex flex-col" slot="options">
				<SelectOptionsWrapper>
					{#each values as value}
						<SelectOption {value} on:selected={(v) => console.log('value', v)} />
					{/each}
				</SelectOptionsWrapper>
			</div>
		</Select>
	</StoryWrapper>
</Hst.Story>
