<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
	import IntroIllustration from '$lib/components/illustrations/IntroIllustration.svelte';
	import Input from '$lib/components/input/Input.svelte';
	import UnauthPageLayout from '$lib/components/layouts/UnauthPageLayout.svelte';
	import Link from '$lib/components/link/Link.svelte';
	import { authStore } from '$lib/stores/auth_store';
	import { userStore } from '$lib/stores/user_store';
	import type { User } from '$lib/utils/interfaces/user';
	import axios from 'axios';

	let phone: string;
	let password: string;
	const handleSubmit = async () => {
		if (phone && password) {
			try {
				const authenticated = await axios.post('api/auth/signin', { phone, password });
				const currentUser = authenticated && (await axios.get('api/user/current'));
				authStore.set({ isAuthenticated: true });
				userStore.set({ user: currentUser.data as User, loading: false });
				window.location.reload();
			} catch (e: unknown) {
				console.log('errored', e);
			}
		}
	};
</script>

<UnauthPageLayout>
	<div class="mr-4 flex flex-col lg:mr-0">
		<div class="mb-4 flex flex-col gap-4">
			<h1 class=" text-5xl font-extrabold">Logg inn her</h1>
			<h2 class="text-sm font-medium">
				Hvis du allerede har en Cobo-konto, så kan du logge inn her.
			</h2>
		</div>

		<form on:submit|preventDefault={handleSubmit}>
			<Input label="Telefonnummer" on:inputChange={(e) => (phone = e.detail.text)} />
			<Input
				label="Passord"
				type="password"
				on:inputChange={(e) => (password = e.detail.text)}
				on:enter={() => handleSubmit()}
			/>
		</form>
		<div class="items-between flex flex-col">
			<div class="flex flex-row-reverse items-center justify-between gap-2">
				<Button title="Logg inn" on:click={handleSubmit} disabled={!phone || !password}
					>Logg inn</Button
				>
				<div class="inline-flex gap-2">
					<p class=" text-darkBlue">Ingen bruker?</p>
					<Link title="Registrer deg" href="/register">Registrer deg</Link>
				</div>
			</div>
		</div>
	</div>
	<div
		class="hidden min-w-[400px] max-w-[800px] flex-1 content-center items-center justify-center lg:flex"
	>
		<IntroIllustration />
	</div>
</UnauthPageLayout>

<style></style>
