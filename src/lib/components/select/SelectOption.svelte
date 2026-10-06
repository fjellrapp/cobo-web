<script lang="ts">
	let {
		value = '',
		onSelected
	}: { value?: string | number; onSelected?: (value: string | number) => void } = $props();

	const emit = () => onSelected?.(value);
</script>

<button
	type="button"
	onclick={emit}
	class="my-1 flex items-start px-6 py-2 transition-colors ease-in-out hover:bg-slate-200"
>
	{value}
</button>
