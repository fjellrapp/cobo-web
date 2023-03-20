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

<button
	on:click={emit}
	class="my-1 flex items-start px-6 py-2 transition-colors ease-in-out hover:bg-slate-200"
>
	{value}
</button>
