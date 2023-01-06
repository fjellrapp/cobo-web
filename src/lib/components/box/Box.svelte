<script lang="ts">
	export let extendCss: string = '';
</script>

<div class={`box ${extendCss} bg-slate-900`}>
	<slot />
</div>

<style>
	.box {
		@apply w-fit rounded-lg  bg-primaryBg p-8 shadow-md;
	}
</style>
