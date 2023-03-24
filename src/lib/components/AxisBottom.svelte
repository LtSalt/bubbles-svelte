<script>
	import { getContext } from 'svelte';
	import { svg } from '$lib/context/contextKeys';
	import { axisBottom, select } from 'd3';

	let axis;

	let { scales, innerHeight } = getContext(svg);
	let x = $scales.x;

	$: if (axis) {
		select(axis).call(axisBottom($x).ticks(2));
	}
</script>

<g class="axis" bind:this={axis} transform="translate(0, {$innerHeight})" />
