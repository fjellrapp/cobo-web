<script lang="ts">
import List from '$lib/components/list/List.svelte';
import ListItem from '$lib/components/list/ListItem.svelte';
import type { Hst } from '@histoire/plugin-svelte';
import StoryWrapper from './StoryWrapper/StoryWrapper.svelte';

export let Hst: Hst;
</script>

<Hst.Story>
	<StoryWrapper>
		<List class="test">
			<ListItem>test</ListItem>
			<ListItem>test</ListItem>
			<ListItem>test</ListItem>
			<ListItem>test</ListItem>
		</List>
	</StoryWrapper>
</Hst.Story>
