<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
	import IntroIllustration from '$lib/components/illustrations/IntroIllustration.svelte';
	import Input from '$lib/components/input/Input.svelte';
	import UnauthPageLayout from '$lib/components/layouts/UnauthPageLayout.svelte';
	import { createForm } from 'felte';
	import { validator } from '@felte/validator-yup';
	import * as yup from 'yup';
	import { signUp } from '$lib/hooks/auth';
	import type { SignUpModel } from '$lib/utils/interfaces/auth';

	const { form } = createForm({
		validate: (values: any) => {
			const typedValues = values as SignUpModel;
			const error: SignUpModel | {} = {};
			console.log(typedValues);
		},
		onSubmit: (values) => {
			submitted = true;
			console.log(values);
			signUp(values as SignUpModel);
		},
		onError: (res) => {
			console.log(res);
		},
		onSuccess: (success) => {
			console.log(success);
		}
	});

	const signupModel: SignUpModel = {
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		password: '',
		passwordConfirm: ''
	};

	let submitted = false;
</script>

<UnauthPageLayout>
	<div class="mr-4 flex flex-col lg:mr-0">
		<div class="mb-4 flex flex-col gap-4">
			<h1 class=" text-5xl font-extrabold">Registrering</h1>
			<h2 class="text-sm font-medium">
				For å benytte Cobo sine tjenester, kreves det at du har en konto. Registrer en konto her.
			</h2>
		</div>
		<form use:form class="w-full">
			<div class="flex w-full flex-1 gap-4">
				<Input label="Fornavn" name="firstName" required />
				<Input label="Etternavn" name="lastName" required />
			</div>
			<Input label="Epost" name="email" required />
			<Input label="Telefon" required name="phone" />
			<div class="flex w-full flex-1 gap-4">
				<Input label="Passord" type="password" name="password" required />
				<Input label="Bekreft assord" type="password" name="passwordConfirm" required />
			</div>
			<div class="items-between flex flex-col">
				<div class="flex flex-row-reverse items-center justify-between gap-2">
					<Button title="Logg inn" type="submit">Registrer</Button>
				</div>
			</div>
		</form>
	</div>
	<div
		class="hidden min-w-[400px] max-w-[800px] flex-1 content-center items-center justify-center lg:flex"
	>
		<IntroIllustration />
	</div>
</UnauthPageLayout>

<style></style>
