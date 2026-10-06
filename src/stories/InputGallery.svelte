<script lang="ts">
	import Input from '#lib/components/input/Input.svelte';
	const log = (value: unknown) => console.log(value);
</script>

<Input onInputChange={log} onHasValue={log} />
<Input onInputChange={log} onHasValue={log} error="error" />
<Input onInputChange={log} onHasValue={log} hint="hint" />
<Input onInputChange={log} onHasValue={log} type="password" />
