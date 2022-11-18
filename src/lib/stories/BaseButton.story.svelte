<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte';
	import BaseButton from '../components/+BaseButton.svelte';
	export let Hst: Hst;
</script>

<Hst.Story>
	<BaseButton size="large">Title</BaseButton>
</Hst.Story>
