<script lang="ts">
	import type { Component, Snippet } from 'svelte';
	import classnames from 'classnames';
	import { ButtonTypeEnum } from './types';

	let {
		disabled = false,
		iconOnly = false,
		size = 'medium',
		componentType = ButtonTypeEnum.PRIMARY,
		title,
		active = false,
		beforeIcon = null,
		afterIcon = null,
		twClasses = '',
		element = 'button',
		children,
		class: className,
		...restProps
	}: {
		disabled?: boolean;
		iconOnly?: boolean;
		size?: 'small' | 'medium' | 'large';
		componentType?: ButtonTypeEnum;
		title?: string;
		active?: boolean;
		beforeIcon?: Component | null;
		afterIcon?: Component | null;
		twClasses?: string;
		element?: 'a' | 'button';
		children?: Snippet;
		class?: string;
		[key: string]: unknown;
	} = $props();
</script>

<svelte:element
	this={element}
	class:disabled
	{title}
	class={classnames(
		`btn ${twClasses}`,
		{
			'btn-primary': componentType === ButtonTypeEnum.PRIMARY,
			'btn-secondary': componentType === ButtonTypeEnum.SECONDARY,
			'is-link': componentType === ButtonTypeEnum.LINK,
			'btn-plain': componentType === ButtonTypeEnum.PLAIN,
			'size-small': size === 'small',
			'size-medium': size === 'medium',
			'size-large': size === 'large',
			'icon-only': iconOnly,
			active: active
		},
		className
	)}
	{disabled}
	{...restProps}
>
	{#if beforeIcon}
		{@const Icon = beforeIcon}
		<Icon />
	{/if}

	{#if !iconOnly}
		{@render children?.()}
	{/if}
	{#if afterIcon}
		{@const Icon = afterIcon}
		<Icon />
	{/if}
</svelte:element>

<style lang="scss">
	.btn {
		/** Base styles */
		@apply m-2 flex content-center items-center justify-center gap-2  rounded-full text-white shadow-md transition-all ease-in-out;
		/** Sizes */
		@apply text-buttonDefault;
		/** outlines*/
		@apply outline-1 outline-black hover:outline-4;
		/** focus */
		@apply focus:underline focus:underline-offset-2 focus:outline focus:outline-2 focus:outline-offset-2;
		/** active */
		@apply underline active:scale-105;
	}

	.btn-primary {
		@apply bg-darkBlue hover:bg-darkBlue90opacity;
		@apply outline-darkBlue75opacity;
	}
	.btn-secondary {
		@apply bg-red hover:bg-redDarker;
		@apply outline-red50opacity;
	}

	.btn-plain {
		@apply bg-none text-black shadow-none outline-none;
	}
	.disabled {
		@apply cursor-not-allowed;
	}
	.size-small {
		@apply py-2 px-4 text-xs;
	}
	.size-medium {
		@apply py-3 px-5 text-sm;
	}
	.size-large {
		@apply py-3 px-9 text-base;
	}
	.is-link {
		@apply m-0 flex cursor-pointer items-center gap-2 bg-none p-0 text-blue-500 underline underline-offset-2 shadow-none;
	}

	.icon-only {
		@apply px-3;
	}

	.icon-only {
		@apply bg-transparent text-darkBlue shadow-none;
		/** Focus */
		@apply focus:bg-darkBlue focus:text-white;
		/** Hover */
		@apply hover:text-white;
		&.active {
			@apply bg-darkBlue text-white;
		}
		&.btn-secondary {
			@apply bg-red hover:bg-redDarker;
			&.active {
				@apply bg-redDarker;
			}
		}
	}
</style>
