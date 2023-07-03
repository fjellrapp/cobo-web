<script lang="ts">
import Input from '$lib/components/input/Input.svelte';
import type { Hst } from '@histoire/plugin-svelte';

export let Hst: Hst;
let value = 'test';
const handleChange = (event: any) => {
	console.log(event);
};
const handleHasValue = (e: any) => {
	console.log(e);
};
</script>

<Hst.Story>
	<Input on:inputChange="{handleChange}" on:hasValue="{handleHasValue}" />
	<Input on:inputChange="{handleChange}" on:hasValue="{handleHasValue}" error="error" />
	<Input on:inputChange="{handleChange}" on:hasValue="{handleHasValue}" hint="hint" />
	<Input on:inputChange="{handleChange}" on:hasValue="{handleHasValue}" type="password" />
</Hst.Story>
