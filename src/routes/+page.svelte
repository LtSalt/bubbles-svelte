<script>
	import { scaleLinear, scaleLog, scaleSqrt, scaleOrdinal } from 'd3';
	import AxisBottom from '../lib/components/AxisBottom.svelte';
	import AxisLeft from '../lib/components/AxisLeft.svelte';
	import Circles from '../lib/components/Circles.svelte';
	import Fill from '../lib/components/Fill.svelte';
	import R from '../lib/components/R.svelte';
	import Slider from '../lib/components/Slider.svelte';
	import Svg from '../lib/components/Svg.svelte';
	import Viz from '../lib/components/Viz.svelte';
	import X from '../lib/components/X.svelte';
	import Y from '../lib/components/Y.svelte';

	export let data;
	const { gapminder } = data;
	const fillColors = ['#4E79A7FF', '#EDC948FF', '#76B7B2FF', '#59A14FFF', '#B07AA1FF'];
</script>

<Viz width="100%" height="100%" data={gapminder} index="country" let:filters>
	<Svg width="100%" height="80%">
		<X accessor="income" scale={scaleLog} />
		<Y accessor="life_exp" scale={scaleLinear} />
		<R accessor="population" scale={scaleSqrt} range={[4, 40]} />
		<Fill accessor="continent" scale={scaleOrdinal} range={fillColors} />
		<Circles fillOpacity="0.8" />
		<AxisLeft />
		<AxisBottom />
	</Svg>

	<Slider accessor="year" step="1" styles="width: 100%" />
	<div id="year">
		{filters.sliderFilter}
	</div>
</Viz>

<style>
	@import '../css/styles.css';

	:global(body) {
		height: 100svh;
	}

	#year {
		width: fit-content;
		margin-inline: auto;
	}
</style>
