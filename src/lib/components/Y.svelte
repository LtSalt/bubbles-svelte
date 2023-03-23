<script>
	import { derived } from 'svelte/store';
	import { getContext } from 'svelte';
	import { svg } from '$lib/context/contextKeys';
	import { extent } from 'd3';

	export let scale = () => {};
	export let accessor;

	let { innerHeight, scales, data, accessors } = getContext(svg);

	let y = derived(innerHeight, ($innerHeight) => {
		return scale()
			.domain(extent(data.map((d) => d[accessor])))
			.range([$innerHeight, 0]);
	});

	$scales = { ...$scales, y };
	$accessors = { ...$accessors, yAccessor: accessor };
</script>
