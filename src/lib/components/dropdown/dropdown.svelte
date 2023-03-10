<script lang="ts">
	// dropdown
	export let dropdownItems: string[] | ConstructorOfATypedSvelteComponent[] = [];
	export let isOpen: boolean = false;
	console.log('isopen', isOpen);
</script>

<div class="absolute top-16 flex flex-col">
	{#if isOpen}
		<div class="top-10 flex h-[5vh] w-36 rounded-full bg-slate-400">
			{#each dropdownItems as item}
				<div class="flex">
					<button
						class="flex w-full items-center justify-center rounded-md px-4 py-2 text-left text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
					>
						{item}
					</button>
				</div>
			{/each}
		</div>
	{/if}
</div>
