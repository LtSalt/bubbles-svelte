<script>
	import { getContext } from 'svelte';
	import { svg } from '$lib/context/contextKeys';
	import { axisLeft, select } from 'd3';

	let axis;

	let { scales, innerWidth } = getContext(svg);
	let y = $scales.y;

	$: if (axis) {
		select(axis).call(axisLeft($y));
	}
</script>

<g class="axis" bind:this={axis} />
