<script lang="ts">
	import Button from '../lib/components/button/Button.svelte';
	import type { Hst } from '@histoire/plugin-svelte';
	import Alert from '../lib/components/icons/AlertIcon.svelte';
	import { ButtonTypeEnum } from '../lib/components/button/types';
	import StoryWrapper from './StoryWrapper/StoryWrapper.svelte';
	export let Hst: Hst;

	const clickHandler = () => {
		console.log('clicked');
	};
</script>

<Hst.Story>
	<StoryWrapper css="w-1/2">
		<Button componentType={ButtonTypeEnum.PRIMARY} on:click={clickHandler}>En primærknapp</Button>
		<Button componentType={ButtonTypeEnum.SECONDARY}>En sekundærknapp</Button>
		<Button componentType={ButtonTypeEnum.PRIMARY} afterIcon={Alert}>En annen knapp med ikon</Button>
		<Button componentType={ButtonTypeEnum.PRIMARY} beforeIcon={Alert}>En annen knapp med ikon</Button>
		<Button componentType={ButtonTypeEnum.LINK} beforeIcon={Alert}>En link</Button>
		<Button iconOnly beforeIcon={Alert} title="Med kun ikon" twClasses="text-white"/>
	</StoryWrapper>
	
</Hst.Story>
