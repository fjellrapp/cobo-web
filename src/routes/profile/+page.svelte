<script lang="ts">
	import Card from '$lib/components/card/Card.svelte';
	import Input from '$lib/components/input/Input.svelte';
	import Heading from '$lib/components/primitives/Heading.svelte';
	import Text from '$lib/components/primitives/Text.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const user = data.user;
</script>

<div class="grid w-full grid-cols-6">
	<div class="col-span-4 flex w-full">
		<div class="grid flex-1 grid-rows-6">
			<Heading customClass="text-5xl row-span-2">{user?.firstName} {user?.lastName}</Heading>

			<div class="row-span-4 flex flex-col">
				<Card header="Kontoinformasjon">
					<div class="text-row">
						<Text>Epost</Text>
						<Input disabled value={user?.email} />
					</div>
					<div class="text-row">
						<Text>Telefon</Text>
						<Input disabled value={user?.phone} />
					</div>
				</Card>
			</div>
		</div>
	</div>
	<div class="col-span-2 flex" />
</div>

<style lang="scss">
	.text-row {
		@apply flex items-baseline gap-32;
	}
</style>
