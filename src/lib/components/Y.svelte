<script>
	import { derived } from 'svelte/store';
	import { getContext } from 'svelte';
	import { dimensions } from '$lib/context/contextKeys';

	export let scale = () => {};
	let { innerHeight } = getContext(dimensions);

	let y = derived(innerHeight, ($innerHeight) => {
		return scale.domain([0, 1000]).range([0, $innerHeight]);
	});
</script>
