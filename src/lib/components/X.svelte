<script>
	import { derived } from 'svelte/store';
	import { getContext } from 'svelte';
	import { svg } from '$lib/context/contextKeys';
	import { extent } from 'd3';

	export let scale = () => {};
	export let accessor;

	let { innerWidth, scales, data, accessors } = getContext(svg);

	console.log(data);

	let x = derived(innerWidth, ($innerWidth) => {
		return scale()
			.domain(extent(data.map((d) => d[accessor])))
			.range([0, $innerWidth]);
	});

	$scales = { ...$scales, x };
	$accessors = { ...$accessors, xAccessor: accessor };
</script>
