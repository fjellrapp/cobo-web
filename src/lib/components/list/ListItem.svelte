<script lang="ts">
import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();

export let value: string;

const emit = () => {
	dispatch('change', {
		value
	});
};
</script>

<li class="flex" on:click="{emit}">
	{value}
</li>
