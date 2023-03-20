<script lang="ts">
	import AlertIcon from '$lib/components/icons/AlertIcon.svelte';
	import BellIcon from '$lib/components/icons/BellIcon.svelte';
	import ChartPieIcon from '$lib/components/icons/ChartPieIcon.svelte';
	import ClipboardIcon from '$lib/components/icons/ClipboardIcon.svelte';
	import CogIcon from '$lib/components/icons/CogIcon.svelte';
	import DashboardIcon from '$lib/components/icons/DashboardIcon.svelte';
	import HomeIcon from '$lib/components/icons/HomeIcon.svelte';
	import LoginIcon from '$lib/components/icons/LoginIcon.svelte';
	import MailIcon from '$lib/components/icons/MailIcon.svelte';
	import PlusIcon from '$lib/components/icons/PlusIcon.svelte';
	import SignupIcon from '$lib/components/icons/SignupIcon.svelte';
	import UserAddIcon from '$lib/components/icons/UserAddIcon.svelte';
	import UserIcon from '$lib/components/icons/UserIcon.svelte';
	import type { Hst } from '@histoire/plugin-svelte';
	import StoryWrapper from './StoryWrapper/StoryWrapper.svelte';

	export let Hst: Hst;
</script>

<Hst.Story>
	<StoryWrapper css="text-white gap-4 text-lg">
		<AlertIcon />
		<BellIcon />
		<ChartPieIcon />
		<ClipboardIcon />
		<CogIcon />
		<DashboardIcon />
		<HomeIcon />
		<LoginIcon />
		<MailIcon />
		<PlusIcon />
		<SignupIcon />
		<UserIcon />
		<UserAddIcon />
	</StoryWrapper>
</Hst.Story>
