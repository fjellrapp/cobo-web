<script lang="ts">
	import Box from '$lib/components/box/Box.svelte';
	import type { Hst } from '@histoire/plugin-svelte';

	export let Hst: Hst;
</script>

<Hst.Story>
	<Box>Some content</Box>
</Hst.Story>
