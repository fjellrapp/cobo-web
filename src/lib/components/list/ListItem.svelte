<script lang="ts">
	let { value, onChange }: { value: string; onChange?: (value: string) => void } = $props();
	const emit = () => onChange?.(value);
</script>

<li class="flex">
	<button type="button" class="w-full text-left" onclick={emit}>
		{value}
	</button>
</li>
