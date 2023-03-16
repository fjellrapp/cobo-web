<script lang="ts">
	import IconSpinner from "$lib/components/icons/IconSpinner.svelte";
	import type { BaseIconCssOptions } from "$lib/utils/models/types/baseIcon";
    
    export let css: BaseIconCssOptions = {
        wrapper: 'text-base',
        svg: 'animate-spin ease-in-out'
    }
</script>

<div class="relative">
    <IconSpinner {css}  />
</div>