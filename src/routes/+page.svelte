<script>
	import { scaleLinear, scaleLog } from 'd3';

	import X from '../lib/components/X.svelte';
	import Svg from '../lib/components/Svg.svelte';
	import Y from '../lib/components/Y.svelte';

	export let data;
	const { gapminder } = data;

	// $: console.log(gapminder);
</script>

<Svg width="100%" height="100%">
	<X scale={scaleLog} />
	<Y scale={scaleLinear} />
</Svg>

<style>
	:global(body) {
		height: 100svh;
	}
</style>
