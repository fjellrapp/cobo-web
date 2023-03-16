<script lang="ts">
	import classnames from 'classnames';
	import { ButtonTypeEnum } from './types';

	export let disabled = false;
	export let iconOnly = false;
	export let size: 'small' | 'medium' | 'large' = 'medium';
	export let componentType: ButtonTypeEnum = ButtonTypeEnum.PRIMARY;
	export let title: string | undefined = undefined;
	export let active = false;
	export let beforeIcon: ConstructorOfATypedSvelteComponent | null = null;
	export let afterIcon: ConstructorOfATypedSvelteComponent | null = null;
	export let twClasses: string = '';
</script>

<button
	class:disabled
	{title}
	class={classnames(`btn ${twClasses}`, {
		'btn-primary': componentType === ButtonTypeEnum.PRIMARY,
		'btn-secondary': componentType === ButtonTypeEnum.SECONDARY,
		'is-link': componentType === ButtonTypeEnum.LINK,
		'btn-plain': componentType === ButtonTypeEnum.PLAIN,
		'size-small': size === 'small',
		'size-medium': size === 'medium',
		'size-large': size === 'large',
		'icon-only': iconOnly,
		active: active
	})}
	on:click
	on:keydown
	on:keyup
	on:submit
	{...$$restProps}
>
	{#if beforeIcon}
		<svelte:component this={beforeIcon} />
	{/if}

	{#if !iconOnly}
		<slot />
	{/if}
	{#if afterIcon}
		<svelte:component this={afterIcon} />
	{/if}
</button>

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
		@apply bg-transparent shadow-none;
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
