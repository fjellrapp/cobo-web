<script>
	import Button from '$lib/components/button/Button.svelte';
	import { ButtonTypeEnum } from '$lib/components/button/types';
	import Dropdown from '$lib/components/dropdown/dropdown.svelte';
	import User from '$lib/components/icons/User.svelte';
	import { user } from '$lib/stores/user_store';
</script>

<div class="flex w-full justify-end p-4">
	<Button componentType={ButtonTypeEnum.PLAIN}>
		<span class=" text-black">
			{$user.user?.firstName ?? 'loading'}
		</span>
		<Dropdown label={$user.user?.firstName} labelColor="text-black" />
		<User />
	</Button>
</div>
