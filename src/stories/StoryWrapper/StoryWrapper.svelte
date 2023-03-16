<script lang="ts">
	import classNames from "classnames";

    export let css: string = '';
    </script>

<div class={classNames(css,`flex flex-col gap-2`)} {...$$restProps}>
    <slot />
</div>