<script lang="ts">
	// dropdown
	export let label: string | undefined = '';
	export let labelColor: 'text-white' | 'text-black' = 'text-white';
	export let iconOnly: boolean = false;
	export let active: boolean = false;
	export let disabled: boolean = false;
	export let dropdown: boolean = false;
	export let dropdownItems: string[] | ConstructorOfATypedSvelteComponent[] = [];
	export let isOpen: boolean = false;
</script>

<div class="flex">
	<button
		class="flex w-full items-center justify-center rounded-md px-4 py-2 text-left text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
		class:active
		class:disabled
		class:dropdown
		class:iconOnly
		on:click={() => {
			isOpen = !isOpen;
		}}
	>
		{#if !iconOnly}
			<span class={`ml-2 ${labelColor}`}>{label}</span>
		{/if}
	</button>

	{#if isOpen}
		<div class="flex rounded-full">
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
