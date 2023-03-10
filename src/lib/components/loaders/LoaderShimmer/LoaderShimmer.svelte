<script lang="ts">
	import classNames from 'classnames';

	export let twWidth: string = '';
	export let twHeight: string = '';
</script>

<div
	class={classNames(`${twHeight} ${twWidth}`, 'animate-pulse leading-relaxed bg-gray rounded-full')}
/>
