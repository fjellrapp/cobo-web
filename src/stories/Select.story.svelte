<script lang="ts">
	import Select from "$lib/components/select/Select.svelte";
	import SelectOption from "$lib/components/select/SelectOption.svelte";
import type { Hst } from "@histoire/plugin-svelte";
	import StoryWrapper from "./StoryWrapper/StoryWrapper.svelte";


    export let Hst: Hst;
 </script>

    <Hst.Story>
        <StoryWrapper>
            <Select>
                <SelectOption value="gds"/>
                <SelectOption value="test2"/>
            </Select>
        </StoryWrapper>
    </Hst.Story>