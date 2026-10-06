<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '#lib/components/button/Button.svelte';
	import LoginIcon from '#lib/components/icons/LoginIcon.svelte';
	import SignupIcon from '#lib/components/icons/SignupIcon.svelte';

	let { activeRoute = null }: { activeRoute?: string | null } = $props();
</script>

<div class="menu-auth">
	<Button
		iconOnly
		beforeIcon={LoginIcon}
		active={activeRoute === '/'}
		title="Logg inn"
		onclick={() => goto('/')}
	/>
	<Button
		iconOnly
		beforeIcon={SignupIcon}
		active={activeRoute === '/register'}
		title="Registrer deg"
		onclick={() => goto('/register')}
	/>
</div>
