<script lang="ts">
	import type { BaseIconCssOptions } from '$lib/utils/models/types/baseIcon';
	import BaseIcon from './base/BaseIcon.svelte';

	export let css: BaseIconCssOptions | undefined;
</script>

<BaseIcon {css} {...$$restProps}>
	<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
</BaseIcon>
