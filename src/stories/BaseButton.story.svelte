<script lang="ts">
	import BaseButton from '../lib/components/button/BaseButton.svelte';
	import type { Hst } from '@histoire/plugin-svelte';
	import Alert from '../lib/components/icons/Alert.svelte';
	import { ButtonTypeEnum } from '../lib/components/button/types';
	export let Hst: Hst;

	const clickHandler = () => {
		console.log('clicked');
	};
</script>

<Hst.Story>
	<BaseButton componentType={ButtonTypeEnum.PRIMARY} on:click={clickHandler}
		>En primærknapp</BaseButton
	>
	<BaseButton componentType={ButtonTypeEnum.SECONDARY}>En sekundærknapp</BaseButton>
	<BaseButton componentType={ButtonTypeEnum.PRIMARY} afterIcon={Alert}
		>En annen knapp med ikon</BaseButton
	>
	<BaseButton componentType={ButtonTypeEnum.PRIMARY} beforeIcon={Alert}
		>En annen knapp med ikon</BaseButton
	>
	<BaseButton componentType={ButtonTypeEnum.LINK} beforeIcon={Alert}>En link</BaseButton>

	<BaseButton iconOnly beforeIcon={Alert} title="Med kun ikon" />
</Hst.Story>
