<script>
	import { derived } from 'svelte/store';
	import { getContext } from 'svelte';
	import { viz, svg } from '$lib/context/contextKeys';
	import { extent } from 'd3';

	export let scale = () => {};
	export let accessor;
	export let range;

	let { innerWidth, scales, accessors } = getContext(svg);
	let { data } = getContext(viz);

	let fill = scale()
		.domain(Array.from(new Set(data.map((d) => d[accessor]))))
		.range(range);

	$scales = { ...$scales, fill };
	$accessors = { ...$accessors, fillAccessor: accessor };
</script>
