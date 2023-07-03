<script lang="ts">
import classNames from 'classnames';
import { createEventDispatcher } from 'svelte';
import ListItem from './ListItem.svelte';
const dispatch = createEventDispatcher();

export let select = false;

let classes = $$props.class;
</script>

<ul class="{classNames(classes)}" class:rounded-t-none="{select}">
	<ListItem value="{value}" on:change="{(v) => console.log('tre', v)}" />
</ul>
