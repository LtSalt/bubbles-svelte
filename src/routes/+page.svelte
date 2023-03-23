<script>
	import Scales from '../lib/components/Scales.svelte';
	import Svg from '../lib/components/Svg.svelte';

	export let data;
	const { gapminder } = data;

	// $: console.log(gapminder);
</script>

<Svg>
	<Scales let:/>
</Svg>

<style>
	:global(body) {
		height: 100svh;
	}
</style>
