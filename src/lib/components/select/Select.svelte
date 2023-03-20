<script lang="ts">
	import classNames from 'classnames';

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
		class={classNames(css, 'select-button')}
		{...props}
		{disabled}
		on:click={() => (open = !open)}
	>
		{currentLabel}
		<slot name="select-separator" />
		{#if open}
			<div class="option-wrapper ">
				<slot name="options" />
			</div>
		{/if}
	</button>
</div>

<style lang="scss">
	.select-wrapper {
		@apply my-2 px-6 py-4;
	}
	.select-button {
		@apply h-10 content-center items-center rounded-md bg-slate-100 px-10;
	}
	.option-wrapper {
		@apply px-4 py-2;
	}
</style>
