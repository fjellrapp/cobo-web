<script lang="ts">
	export let fill: string = 'none';
	export let stroke: string = 'currentColor';
	export let viewBox: string = '0 0 24 24';
	export let width: string | number = '1em';
	export let height: string | number = '1em';
</script>

<div class="icon-base">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		{width}
		{height}
		{viewBox}
		{fill}
		{stroke}
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		<slot />
	</svg>
</div>

<style>
	.icon-base {
		display: flex;
	}
</style>
