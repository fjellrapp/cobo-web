<script lang="ts">
	import type { Snippet } from 'svelte';
	import classNames from 'classnames';
	import ChevronIcon from '../icons/ChevronIcon.svelte';

	let {
		disabled = false,
		css = '',
		open = $bindable(false),
		label = 'Select an option',
		options,
		selectSeparator,
		onChange,
		...restProps
	}: {
		disabled?: boolean;
		css?: string;
		open?: boolean;
		label?: string;
		options?: Snippet<[{ onSelect: (value: string | number) => void }]>;
		selectSeparator?: Snippet;
		onChange?: (value: string | number) => void;
		[key: string]: unknown;
	} = $props();

	let currentSelection = $state<string | number | undefined>();
	const currentLabel = $derived(currentSelection ?? label);
	const select = (value: string | number) => {
		currentSelection = value;
		onChange?.(value);
	};
</script>

<div class="select-wrapper">
	<button
		class={classNames(css, 'select-button', {
			'outline outline-offset-2 outline-2 outline-darkBlue': open
		})}
		{...restProps}
		{disabled}
		onclick={() => (open = !open)}
	>
		<div class="flex items-center justify-between">
			{currentLabel}
			<ChevronIcon
				css={{
					wrapper: `relative transition-all ease-in-out flex w-fit ${
						open ? 'rotate-180' : 'rotate-0'
					}`
				}}
			/>
		</div>
	</button>
	{#if open}
		<div class="option-wrapper">
			{@render options?.({ onSelect: select })}
		</div>
		{@render selectSeparator?.()}
	{/if}
</div>

<style lang="scss">
	.select-wrapper {
		@apply my-2 max-w-lg px-6 py-4;
	}
	.select-button {
		@apply h-10 w-full content-center items-center rounded bg-slate-100 px-6;
	}
	.option-wrapper {
		@apply mt-2 rounded border-none bg-inherit bg-slate-100 transition-all ease-in-out;
	}
</style>
