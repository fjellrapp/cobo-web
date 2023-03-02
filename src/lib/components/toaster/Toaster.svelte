<script lang="ts">
	import { toast, toasts, ToastTypeEnum } from '$lib/stores/toast_store';
	import classNames from 'classnames';
	import { fly, slide, type FlyParams, type SlideParams } from 'svelte/transition';
	import { backInOut } from 'svelte/easing';

	const paramsIn: FlyParams = {
		duration: 1000,
		easing: backInOut,
		x: 150
	};
	const paramsOut: FlyParams = {
		duration: 1000,
		easing: backInOut,
		x: 150
	};

	const handleClose = () => {};
</script>

{#if $toasts}
	<div
		class={classNames(
			'fixed top-4 right-4 block h-auto min-w-[7rem] max-w-[20rem] rounded-md m-4 '
		)}
	>
		{#each $toasts as toast}
			<button
				in:fly={paramsIn}
				out:fly={paramsOut}
				on:click={handleClose}
				class={classNames('py-8 px-6 rounded-md my-2 max-w-[15rem]', {
					'bg-redDarker': toast.type === ToastTypeEnum.ERROR,
					'bg-yellow': toast.type === ToastTypeEnum.WARNING,
					'bg-green': toast.type === ToastTypeEnum.SUCCESS
				})}
			>
				<p class="text-white">{toast.message}</p>
			</button>
		{/each}
	</div>
{/if}
