<script lang="ts">
	import Input from '$lib/components/input/Input.svelte';
</script>

<div class="flex w-[40%] flex-col gap-10">
	<div class="flex flex-col gap-4">
		<h1 class=" text-5xl font-extrabold">Yo!</h1>
		<h2 class="text-sm font-medium">Logg inn eller registrer deg</h2>
	</div>

	<form>
		<Input />
		<Input />
	</form>
</div>

<style></style>
