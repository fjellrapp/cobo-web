<script lang="ts">
	import { toasts, ToastTypeEnum } from '$lib/stores/toast_store';
	import classNames from 'classnames';
	import { slide } from 'svelte/transition';
	import { backInOut } from 'svelte/easing';
</script>

{#if $toasts}
	<div class={classNames('absolute top-4 right-4 block h-auto max-w-[10%] rounded-md m-4 ')}>
		{#each $toasts as toast}
			<div
				transition:slide={{ duration: 2000, easing: backInOut }}
				class={classNames('py-8 px-6 rounded-md my-2', {
					'bg-redDarker': toast.type === ToastTypeEnum.ERROR,
					'bg-yellow': toast.type === ToastTypeEnum.WARNING,
					'bg-green': toast.type === ToastTypeEnum.SUCCESS
				})}
			>
				<p class="text-white">{toast.message}</p>
			</div>
		{/each}
	</div>
{/if}
