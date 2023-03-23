<script>
	import { getContext } from 'svelte';
	import { viz, svg } from '$lib/context/contextKeys';

	export let fillOpacity = 1;

	let { selection, id } = getContext(viz);
	let { scales, accessors } = getContext(svg);

	let x = $scales.x;
	let y = $scales.y;
	let r = $scales.r;

	let xAccessor = $accessors.xAccessor;
	let yAccessor = $accessors.yAccessor;
	let rAccessor = $accessors.rAccessor;

	$: console.log(r);
	$: console.log(rAccessor);

	console.log(id);
</script>

<g class="circles">
	{#each $selection as d (d[id])}
		<circle
			cx={$x(d[xAccessor])}
			cy={$y(d[yAccessor])}
			r={r(d[rAccessor])}
			fill-opacity={fillOpacity}
		/>
	{/each}
</g>
