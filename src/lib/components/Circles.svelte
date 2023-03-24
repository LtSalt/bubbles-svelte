<script>
	import { getContext } from 'svelte';
	import { viz, svg } from '$lib/context/contextKeys';

	export let fillOpacity = 1;

	let { selection, index } = getContext(viz);
	let { scales, accessors } = getContext(svg);

	let x = $scales.x;
	let y = $scales.y;
	let r = $scales.r;
	let fill = $scales.fill;

	let xAccessor = $accessors.xAccessor;
	let yAccessor = $accessors.yAccessor;
	let rAccessor = $accessors.rAccessor;
	let fillAccessor = $accessors.fillAccessor;
</script>

{#if $selection}
	<g class="circles">
		{#each $selection as d (d[index])}
			<circle
				cx={$x(d[xAccessor])}
				cy={$y(d[yAccessor])}
				r={r(d[rAccessor])}
				fill={fill(d[fillAccessor])}
				fill-opacity={fillOpacity}
			/>
		{/each}
	</g>
{/if}
