<script lang="ts">
	import classNames from 'classnames';

	/** Specify as a tw class
	 * @example w-10, h-2/6, w-100%, w-[10px]
	 */
	export let width: string = 'w-10';
	/** Specify as a tw class.
	 * @example h-10, h-2/6, h-100%, h-[10px]
	 */
	export let height: string = 'h-10';
</script>

<div
	class={classNames(`${height} ${width}`, 'animate-pulse leading-relaxed bg-gray rounded-full')}
/>
