<script lang="ts">
	import classNames from 'classnames';

	/** Specify as a tw class
	 * @example w-10, h-2/6, w-100%, w-[10px]
	 */
	let { width = 'w-10', height = 'h-10' }: { width?: string; height?: string } = $props();
	/** Specify as a tw class.
	 * @example h-10, h-2/6, h-100%, h-[10px]
	 */
</script>

<div
	class={classNames(`${height} ${width}`, 'animate-pulse leading-relaxed bg-gray rounded-full')}
></div>
