<script>
	import { scaleLinear, scaleLog, scaleSqrt } from 'd3';
	import AxisBottom from '../lib/components/AxisBottom.svelte';
	import AxisLeft from '../lib/components/AxisLeft.svelte';
	import Circles from '../lib/components/Circles.svelte';
	import R from '../lib/components/R.svelte';
	import Slider from '../lib/components/Slider.svelte';

	import Svg from '../lib/components/Svg.svelte';
	import Viz from '../lib/components/Viz.svelte';
	import X from '../lib/components/X.svelte';
	import Y from '../lib/components/Y.svelte';

	export let data;
	const { gapminder } = data;
</script>

<Viz width="100%" height="100%" data={gapminder} id="country">
	<Slider accessor="year" />

	<Svg width="100%" height="80%" data={gapminder}>
		<X accessor="income" scale={scaleLog} />
		<Y accessor="life_exp" scale={scaleLinear} />
		<R accessor="population" scale={scaleSqrt} range={[4, 40]} />
		<Circles fillOpacity="0.8" />
		<AxisLeft />
		<AxisBottom />
	</Svg>
</Viz>

<style>
	@import '../styles.css';

	:global(body) {
		height: 100svh;
	}
</style>
