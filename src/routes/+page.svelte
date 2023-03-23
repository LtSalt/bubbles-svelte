<script>
	import { scaleLinear, scaleLog } from 'd3';
	import Circle from '../lib/components/Circle.svelte';
	import Circles from '../lib/components/Circles.svelte';
	import Slider from '../lib/components/Slider.svelte';

	import Svg from '../lib/components/Svg.svelte';
	import Viz from '../lib/components/Viz.svelte';
	import X from '../lib/components/X.svelte';
	import Y from '../lib/components/Y.svelte';

	export let data;
	const { gapminder } = data;
</script>

<Viz width="100%" height="100%" data={gapminder}>
	<Slider accessor="year" />

	<Svg width="100%" height="80%" data={gapminder}>
		<X scale={scaleLog} accessor="income" />
		<Y scale={scaleLinear} accessor="life_exp" />
		<Circles />
		<!-- {#each gapminder.filter((d) => d.year === 1900) as d (d.country)}
			<Circle {d} />
		{/each} -->
	</Svg>
</Viz>

<style>
	@import '../styles.css';

	:global(body) {
		height: 100svh;
	}
</style>
