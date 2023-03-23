<script>
	import { getContext } from 'svelte';
	import { svg } from '$lib/context/contextKeys';

	export let d;

	let { selection } = getContext('viz');
	let { scales, accessors } = getContext(svg);

	let x = $scales.x;
	let y = $scales.y;
	let xAccessor = $accessors.xAccessor;
	let yAccessor = $accessors.yAccessor;
	$: console.log($selection);
</script>

<!-- <circle cx={$x(d[xAccessor])} cy={$y(d[yAccessor])} r="10" /> -->
