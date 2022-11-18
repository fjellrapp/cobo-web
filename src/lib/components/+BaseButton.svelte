<script lang="ts">
	import tw from '../utils/tw';

	import classnames from 'classnames';

	export let disabled = false;
	export let size: 'small' | 'medium' | 'large' = 'medium';
	export let class_extenstion: string | null = null;

	const button_base_classes = {
		sm: tw(`p-8`)
	};
	const button_hover = tw(' hover:bg-slate-500');
</script>

<button
	{disabled}
	class={classnames(
		tw('bg-blue-400 py-3 px-9 rounded-full shadow-md flex flex-col content-center justify-center'),
		{
			'text-sm': size === 'small',
			'text-md': size === 'medium',
			'text-lg': size === 'large'
		},
		button_hover,
		button_base_classes,
		class_extenstion
	)}
	on:click
>
	<slot />
</button>
