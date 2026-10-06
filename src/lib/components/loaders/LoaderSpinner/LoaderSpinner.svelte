<script lang="ts">
	import IconSpinner from '#lib/components/icons/IconSpinner.svelte';
	import type { BaseIconCssOptions } from '#lib/utils/models/types/baseIcon';

	let {
		css = {
			wrapper: 'text-base',
			svg: 'animate-spin ease-in-out'
		}
	}: { css?: BaseIconCssOptions } = $props();
</script>

<div class="relative">
	<IconSpinner {css} />
</div>
