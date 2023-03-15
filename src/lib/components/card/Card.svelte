<script lang="ts">
	import classNames from 'classnames';

	export let header: string | null;
	export let body: ConstructorOfATypedSvelteComponent | null = null;
</script>

<div class={classNames(`w-full max-w-3xl self-stretch rounded-lg bg-gray shadow-sm`)}>
	<div class="flex items-center px-6 py-4">
		<h2 class="text-base font-semibold">
			{header}
		</h2>
	</div>
	<div class="flex flex-col content-center gap-2 px-6 py-4">
		{#if body}
			<svelte:component this={body} />
		{:else}
			<slot />
		{/if}
	</div>
</div>
