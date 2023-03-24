<script>
	import { derived } from 'svelte/store';
	import { getContext } from 'svelte';
	import { viz, svg } from '$lib/context/contextKeys';
	import { extent } from 'd3';

	export let scale = () => {};
	export let accessor;

	let { innerHeight, scales, accessors } = getContext(svg);
	let { data } = getContext(viz);

	let y = derived(innerHeight, ($innerHeight) => {
		return scale()
			.domain(extent(data.map((d) => d[accessor])))
			.range([$innerHeight, 0]);
	});

	$scales = { ...$scales, y };
	$accessors = { ...$accessors, yAccessor: accessor };
</script>
