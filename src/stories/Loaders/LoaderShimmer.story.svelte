<script lang="ts">
	import LoaderShimmer from '$lib/components/loaders/LoaderShimmer/LoaderShimmer.svelte';
	import type { Hst } from '@histoire/plugin-svelte';
	import StoryWrapper from '../StoryWrapper/StoryWrapper.svelte';

	export let Hst: Hst;
</script>

<Hst.Story>
	<StoryWrapper>
		<LoaderShimmer width="w-24" height="h-5" />
	</StoryWrapper>
</Hst.Story>
