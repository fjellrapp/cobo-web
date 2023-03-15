<script lang="ts">
	import Heading from '$lib/components/primitives/Heading.svelte';
	import { authStore } from '$lib/stores/auth_store';
	import { userStore } from '$lib/stores/user_store';
	import type { PageData } from './$types';

	export let data: PageData;
	if (!$userStore.user && data.user) {
		authStore.set({ isAuthenticated: true });
		userStore.set({ user: data.user, loading: false });
	}
</script>

<div class="grid w-full grid-cols-6">
	<div class="col-span-4 flex py-4">
		<Heading>{$userStore.user?.firstName}</Heading>
	</div>
	<div class="col-span-2 flex" />
</div>
