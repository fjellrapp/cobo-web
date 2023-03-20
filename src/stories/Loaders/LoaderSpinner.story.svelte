<script lang="ts">
	import LoaderSpinner from '$lib/components/loaders/LoaderSpinner/LoaderSpinner.svelte';
	import type { Hst } from '@histoire/plugin-svelte';
	import StoryWrapper from '../StoryWrapper/StoryWrapper.svelte';

	export let Hst: Hst;
</script>

<Hst.Story>
	<StoryWrapper>
		<LoaderSpinner />
	</StoryWrapper>
</Hst.Story>
