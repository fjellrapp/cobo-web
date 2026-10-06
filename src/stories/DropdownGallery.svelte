<script lang="ts">
	import Dropdown from '#lib/components/dropdown/dropdown.svelte';
	const items = ['One', 'Two', 'Three'];
</script>

<Dropdown isOpen dropdownItems={items} />
