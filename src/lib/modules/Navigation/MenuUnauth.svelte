<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/components/button/Button.svelte';
	import LoginIcon from '$lib/components/icons/LoginIcon.svelte';
	import SignupIcon from '$lib/components/icons/SignupIcon.svelte';

	export let activeRoute: string | null = null;
</script>

<div class="menu-auth">
	<Button
		iconOnly
		beforeIcon={LoginIcon}
		active={activeRoute === '/'}
		title="Logg inn"
		on:click={() => goto('/')}
	/>
	<Button
		iconOnly
		beforeIcon={SignupIcon}
		active={activeRoute === '/register'}
		title="Registrer deg"
		on:click={() => goto('/register')}
	/>
</div>
