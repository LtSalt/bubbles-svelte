<script>
	import { setContext } from 'svelte';
	import { readonly, writable } from 'svelte/store';

	let svgWidth = writable(0);
	let svgHeight = writable(0);

	let width = readonly(svgWidth);
	let height = readonly(svgHeight);

	setContext('dimensions', { width, height });
</script>

<div class="svg-wrapper" bind:clientWidth={$svgWidth} bind:clientHeight={$svgHeight}>
	<svg width={$svgWidth} height={$svgHeight}>
		<slot />
	</svg>
</div>

<style>
	.svg-wrapper {
		height: 100%;
	}
</style>
