<script>
	import { getContext } from 'svelte';
	import { min, max } from 'd3';

	export let accessor;

	let { data, selection } = getContext('viz');

	let minValue = min(data.map((d) => d[accessor]));
	let maxValue = max(data.map((d) => d[accessor]));

	export let filter = minValue;
	$: $selection = data.filter((d) => d[accessor] === filter);
</script>

<input type="range" name="slider" id="slider" min={minValue} max={maxValue} bind:value={filter} />
