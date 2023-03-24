<script>
	import { setContext } from 'svelte';
	import { viz } from '$lib/context/contextKeys.js';
	import { writable } from 'svelte/store';

	export let data;
	export let index;
	export let width;
	export let height;

	let selection = writable();
	let filters = writable({});

	setContext(viz, { data, selection, index, filters });
</script>

<div id="viz" style="width: {width}; height: {height}">
	<slot filters={$filters} />
</div>
