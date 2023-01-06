<script lang="ts">
	import Box from '$lib/components/box/Box.svelte';
	import Button from '$lib/components/button/Button.svelte';
</script>

<Box extendCss="absolute left-20">
	<Button on:click={() => console.log('test')}>Logg ut</Button>
</Box>
