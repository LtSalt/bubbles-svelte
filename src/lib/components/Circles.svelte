<script>
	import { getContext } from 'svelte';
	import { viz, svg } from '$lib/context/contextKeys';
	import R from './R.svelte';

	let { selection } = getContext(viz);
	let { scales, accessors } = getContext(svg);

	let x = $scales.x;
	let y = $scales.y;
	let r = $scales.r;

	let xAccessor = $accessors.xAccessor;
	let yAccessor = $accessors.yAccessor;
	let rAccessor = $accessors.rAccessor;

	$: console.log(r);
	$: console.log(rAccessor);
</script>

{#each $selection as d}
	<!-- <circle cx={$x(d[xAccessor])} cy={$y(d[yAccessor])} r={r(d[rAccessor])} /> -->
	<circle cx={$x(d[xAccessor])} cy={$y(d[yAccessor])} r={r(d[rAccessor])} />
{/each}
