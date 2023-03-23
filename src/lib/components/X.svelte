<script>
	import { derived } from 'svelte/store';
	import { getContext } from 'svelte';
	import { dimensions } from '$lib/context/contextKeys';

	export let scale = () => {};
	let { innerWidth } = getContext(dimensions);

	let x = derived(innerWidth, ($innerWidth) => {
		return scale.domain([0, 1000]).range([0, $innerWidth]);
	});
</script>
