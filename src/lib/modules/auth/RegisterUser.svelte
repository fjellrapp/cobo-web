<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
	import IntroIllustration from '$lib/components/illustrations/IntroIllustration.svelte';
	import Input from '$lib/components/input/Input.svelte';
	import UnauthPageLayout from '$lib/components/layouts/UnauthPageLayout.svelte';
	import { object, string } from 'yup';
	const signupSchema = object({
		firstName: string().required().label('Fornavn'),
		lastName: string().required().label('Etternavn'),
		email: string().required().label('Epost'),
		phone: string().required().max(8).label('Telefon'),
		password: string().required().strict().min(8).label('Passord')
	});
	const signupModel: {
		firstName: string;
		lastName: string;
		email: string;
		phone: string;
		password: string;
		passwordConfirm: string;
	} = {
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		password: '',
		passwordConfirm: ''
	};

	$: hasValues = Object.keys(signupModel).some((value) => value.length === 0) ? false : true;

	const handleSubmit = () => {
		if (hasValues) {
			console.log(signupModel);
		}
	};
	console.log(hasValues);
</script>

<UnauthPageLayout>
	<div class="mr-4 flex flex-col lg:mr-0">
		<div class="mb-4 flex flex-col gap-4">
			<h1 class=" text-5xl font-extrabold">Registrering</h1>
			<h2 class="text-sm font-medium">
				For å benytte Cobo sine tjenester, kreves det at du har en konto. Registrer en konto her.
			</h2>
		</div>
		<form on:submit|preventDefault={handleSubmit} class="w-full">
			<div class="flex w-full flex-1 gap-4">
				<Input
					label="Fornavn"
					on:inputChange={(e) => (signupModel.firstName = e.detail.text)}
					required
				/>
				<Input
					label="Etternavn"
					on:inputChange={(e) => (signupModel.lastName = e.detail.text)}
					required
				/>
			</div>
			<Input label="Epost" on:inputChange={(e) => (signupModel.email = e.detail.text)} required />
			<Input label="Telefon" required on:inputChange={(e) => (signupModel.phone = e.detail.text)} />
			<div class="flex w-full flex-1 gap-4">
				<Input
					label="Passord"
					type="password"
					required
					on:inputChange={(e) => (signupModel.password = e.detail.text)}
				/>
				<Input
					label="Bekreft assord"
					type="password"
					required
					on:inputChange={(e) => (signupModel.password = e.detail.text)}
				/>
			</div>
		</form>
		<div class="items-between flex flex-col">
			<div class="flex flex-row-reverse items-center justify-between gap-2">
				<Button title="Logg inn" on:click={handleSubmit} disabled={!hasValues}>Registrer</Button>
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
