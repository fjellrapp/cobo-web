<script lang="ts">
	import classNames from 'classnames';
	import ChevronIcon from '../icons/ChevronIcon.svelte';

	export let disabled: boolean = false;
	export let css: string = '';
	export let open = false;
	export let label: string = 'Select an option';
	export let onChange: (value: any) => void;
	let currentSelection: string = '';

	let props = { ...$$restProps };

	$: currentLabel = label ?? currentSelection;
</script>

<div class="select-wrapper">
	<button
		class={classNames(css, 'select-button', {
			'outline outline-offset-2 outline-2 outline-darkBlue': open
		})}
		{...props}
		{disabled}
		on:click={() => (open = !open)}
	>
		<div class="flex items-center justify-between ">
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
			<slot name="options" />
		</div>
		<slot name="select-separator" />
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
