<script lang="ts">
	import classNames from 'classnames';
	import { createEventDispatcher } from 'svelte';

	export let disabled = false;
	export let required = false;
	export let label = '';
	export let customClasses: string | undefined = undefined;
	export let error: string | undefined = undefined;
	export let name: string | undefined = undefined;
	export let hint: string | undefined = undefined;
	export let type: 'text' | 'number' | 'password' | 'tel' | 'email' = 'text';
	export let placeholder: string | undefined = undefined;
	export let value: string | number | null | undefined = '';

	const dispatch = createEventDispatcher();

	const inputHandler = (e: any) => {
		dispatch('inputChange', { text: e?.target?.value });
		dispatch('dirty', {
			value: true
		});
		dispatch('hasValue', { value: e?.target?.value?.length > 0 });
	};
	const keyUpHandler = (e: KeyboardEvent) => e.key === 'Enter' && dispatch('enter');
</script>

<div class="flex-column flex-column my-4 w-full content-center">
	<label for={label.toLowerCase()} class="text-xs font-bold uppercase text-darkBlue">{label}</label>
	<input
		id={label.toLowerCase()}
		{type}
		on:input={inputHandler}
		on:keyup={keyUpHandler}
		class:disabled
		{disabled}
		{required}
		{placeholder}
		{name}
		{value}
		class={classNames(
			'base',
			{ invalid: error?.length, password: type === 'password' },
			customClasses
		)}
	/>
	{#if error}
		<span class="text-redDarker">{error}</span>
	{/if}
	{#if hint}
		<span class="text-sm font-thin text-zinc-300">{hint}</span>
	{/if}
</div>

<style>
	.base {
		/** base */
		@apply flex w-full content-center items-center justify-center gap-5 rounded-md border-2 border-gray py-3 px-5 text-base font-medium outline-none transition-all duration-500;
		/** focus */
		@apply focus:border-darkBlue50opacity;
	}
	.invalid {
		@apply border-redDarker;
	}
	.password {
		@apply space-x-2 font-verdana font-bold;
	}
</style>
