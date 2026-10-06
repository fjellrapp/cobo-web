<script lang="ts">
	import classNames from 'classnames';
	import type { ChangeEventHandler, KeyboardEventHandler } from 'svelte/elements';

	let {
		disabled = false,
		required = false,
		label = '',
		customClasses,
		error,
		name,
		hint,
		type = 'text',
		placeholder,
		value = $bindable(''),
		onInputChange,
		onDirty,
		onHasValue,
		onEnter
	}: {
		disabled?: boolean;
		required?: boolean;
		label?: string;
		customClasses?: string;
		error?: string;
		name?: string;
		hint?: string;
		type?: 'text' | 'number' | 'password' | 'tel' | 'email';
		placeholder?: string;
		value?: string | number | null;
		onInputChange?: (detail: { text: string }) => void;
		onDirty?: (detail: { value: true }) => void;
		onHasValue?: (detail: { value: boolean }) => void;
		onEnter?: () => void;
	} = $props();

	const inputHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
		value = event.currentTarget.value;
		onInputChange?.({ text: event.currentTarget.value });
		onDirty?.({ value: true });
		onHasValue?.({ value: event.currentTarget.value.length > 0 });
	};
	const keyUpHandler: KeyboardEventHandler<HTMLInputElement> = (event) => {
		if (event.key === 'Enter') onEnter?.();
	};
</script>

<div class="flex-column flex-column my-4 w-full content-center">
	<label for={label.toLowerCase()} class="text-xs font-bold uppercase text-darkBlue">{label}</label>
	<input
		id={label.toLowerCase()}
		{type}
		oninput={inputHandler}
		onkeyup={keyUpHandler}
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
