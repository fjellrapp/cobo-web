<script>
	import BaseIcon from './base/BaseIcon.svelte';
	export let stroke = 'black';
</script>

<BaseIcon {stroke}>
	<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
</BaseIcon>
