<script lang="ts">
	import Heading from '$lib/components/primitives/Heading.svelte';
	import Text from '$lib/components/primitives/Text.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const user = data.user;

	console.log('dataa', data);
</script>

<div class="grid w-full grid-cols-6">
	<div class="col-span-4 flex py-4">
		<div class="flex flex-col">
			<Heading customClass="text-5xl">{user?.firstName} {user?.lastName}</Heading>

			<div class="flex flex-col">
				<Text>Email: {user?.email}</Text>
			</div>
		</div>
	</div>
	<div class="col-span-2 flex" />
</div>
