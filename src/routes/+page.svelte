<script>
	import { scaleLinear, scaleLog } from 'd3';
	import Circle from '../lib/components/Circle.svelte';

	import Svg from '../lib/components/Svg.svelte';
	import X from '../lib/components/X.svelte';
	import Y from '../lib/components/Y.svelte';

	export let data;
	const { gapminder } = data;
</script>

<Svg width="100%" height="100%" data={gapminder}>
	<X scale={scaleLog} accessor="income" />
	<Y scale={scaleLinear} accessor="life_exp" />
	{#each gapminder.filter((d) => d.year === 1900) as d (d.country)}
		<Circle {d} />
	{/each}

	<!-- <circle cx={x(d.income)} cy={y(d.life_exp)} r="10" /> -->
</Svg>

<style>
	:global(body) {
		height: 100svh;
	}
</style>
