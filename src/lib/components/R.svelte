<script>
	import { derived } from 'svelte/store';
	import { getContext } from 'svelte';
	import { viz, svg } from '$lib/context/contextKeys';
	import { extent } from 'd3';

	export let scale = () => {};
	export let accessor;
	export let range;

	let { scales, accessors } = getContext(svg);
	let { data } = getContext(viz);

	let r = scale()
		.domain(extent(data.map((d) => d[accessor])))
		.range(range);

	$scales = { ...$scales, r };
	$accessors = { ...$accessors, rAccessor: accessor };
</script>
