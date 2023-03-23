<script>
	import { setContext } from 'svelte';
	import { viz } from '$lib/context/contextKeys.js';
	import { writable } from 'svelte/store';

	export let data;
	export let id;
	export let width;
	export let height;
	console.log(data);

	let selection = writable();

	setContext(viz, { data, selection, id });
</script>

<div id="viz" style="width: {width}; height: {height}">
	<slot />
</div>
