<script>
	import Menu from './Menu.svelte';
</script>

<div class="nav">
	<div class="logo">
		<h1 class=" text-xs font-extrabold uppercase">Cobo</h1>
	</div>
	<Menu />
	<div class="create">
		<p>knapp</p>
	</div>
</div>

<style>
	.nav {
		@apply flex h-screen flex-col items-center justify-between gap-xs bg-primaryBg p-6;
	}
</style>
