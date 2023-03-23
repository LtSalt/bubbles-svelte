<script>
	import { setContext } from 'svelte';
	import { viz } from '$lib/context/contextKeys.js';
	import { writable } from 'svelte/store';

	export let data;
	export let width;
	export let height;

	let selection = writable();

	setContext('viz', { data, selection });
</script>

<div id="viz" style="width: {width}; height: {height}">
	<slot />
</div>
