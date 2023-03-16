<script lang="ts">
	import IntroIllustration from "$lib/components/illustrations/IntroIllustration.svelte";
import type { Hst } from "@histoire/plugin-svelte";
	import StoryWrapper from "../StoryWrapper/StoryWrapper.svelte";


    export let Hst: Hst;
</script>

<Hst.Story>
    <StoryWrapper>
        <IntroIllustration />
    </StoryWrapper>
</Hst.Story>