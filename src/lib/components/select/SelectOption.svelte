<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let value: string | number = '';
	let onChange: (value: any) => void;
	const dispatch = createEventDispatcher();

	const emit = () => {
		dispatch('selected', {
			value
		});
	};
</script>

<button on:click={emit}>
	{value}
</button>
