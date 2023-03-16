<script lang="ts">
	import classNames from "classnames";



export let disabled: boolean = false
export let css: string = ''
 let props = {...$$restProps}; 
</script>

<button class={classNames(css, 'h-10 rounded-md px-10')} {...props} {disabled}>
    <slot />
</button>