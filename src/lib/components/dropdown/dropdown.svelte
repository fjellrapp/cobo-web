<script lang="ts">
	import type { Component } from 'svelte';
	// dropdown
	let {
		dropdownItems = [],
		isOpen = false
	}: { dropdownItems?: (string | Component)[]; isOpen?: boolean } = $props();
</script>

<div class="absolute top-16 flex flex-col">
	{#if isOpen}
		<div class="top-10 flex h-[5vh] w-36 rounded-full bg-slate-400">
			{#each dropdownItems as item, index (typeof item === 'string' ? item : index)}
				<div class="flex">
					<button
						class="flex w-full items-center justify-center rounded-md px-4 py-2 text-left text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
					>
						{#if typeof item === 'string'}
							{item}
						{:else}
							{@const Item = item}
							<Item />
						{/if}
					</button>
				</div>
			{/each}
		</div>
	{/if}
</div>
