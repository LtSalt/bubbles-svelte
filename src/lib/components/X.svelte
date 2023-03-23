<script>
	import { derived } from 'svelte/store';
	import { getContext } from 'svelte';
	import { svg } from '$lib/context/contextKeys';

	export let scale = () => {};
	export let accessor;

	let { innerWidth, scales, data } = getContext(svg);

	let x = derived(innerWidth, ($innerWidth) => {
		return scale().domain([0, data[accessor]]).range([0, $innerWidth]);
	});

	$scales = { ...$scales, x };
</script>
