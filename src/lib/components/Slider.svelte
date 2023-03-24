<script>
	import { getContext } from 'svelte';
	import { min, max } from 'd3';
	import { viz } from '$lib/context/contextKeys.js';

	export let accessor;
	export let step;
	export let styles;
	let { data, selection, filters } = getContext(viz);

	let minValue = min(data.map((d) => d[accessor]));
	let maxValue = max(data.map((d) => d[accessor]));

	export let filter = minValue;
	$: $selection = data.filter((d) => d[accessor] === filter);
	$: $filters = { ...filters, sliderFilter: filter };
</script>

<input
	type="range"
	name="slider"
	id="slider"
	min={minValue}
	max={maxValue}
	bind:value={filter}
	{step}
	style={styles}
/>
