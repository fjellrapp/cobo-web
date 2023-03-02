<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
	import IntroIllustration from '$lib/components/illustrations/IntroIllustration.svelte';
	import Input from '$lib/components/input/Input.svelte';
	import UnauthPageLayout from '$lib/components/layouts/UnauthPageLayout.svelte';
	import { createForm } from 'felte';
	import type { SignUpModel } from '$lib/utils/interfaces/auth';
	import { goto } from '$app/navigation';
	import axios, { AxiosError } from 'axios';
	import { toast, ToastTypeEnum } from '$lib/stores/toast_store';

	interface SignupError {
		passwordDoNotMatch: string;
		userAlreadyExists?: string;
	}
	const validateErrors = (model: SignUpModel): SignupError => {
		const errors: SignupError = { passwordDoNotMatch: '', userAlreadyExists: '' };
		if (model.password !== model.passwordConfirm)
			errors.passwordDoNotMatch = 'password do not match';

		return errors;
	};

	const { form } = createForm({
		validate: (values: unknown) => {
			const model = values as SignUpModel;

			console.log('errr', model);
			return validateErrors(model);
		},
		onSubmit: async (values) => {
			const model = { ...values } as SignUpModel;
			delete model.passwordConfirm;
			const signupResult = await axios.post('api/auth/signup', model);
			if (signupResult?.status === 201) {
				goto('/');
			}
		},
		onError: (error: unknown) => {
			if (error instanceof AxiosError) {
				const message = error.response?.data?.message;
				toast(ToastTypeEnum.ERROR, message || error.message);
			} else {
				console.error(error);
			}
		},
		onSuccess: (success) => {
			toast(ToastTypeEnum.SUCCESS, 'Welcome my man!');
			goto('/login');
			console.log(success);
		}
	});
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
