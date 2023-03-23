<script>
	import { setContext } from 'svelte';
	import { writable, derived } from 'svelte/store';
	import { svg } from '$lib/context/contextKeys';

	export let data;
	export let margins = { top: 20, right: 20, bottom: 50, left: 50 };
	export let width;
	export let height;

	let outerWidth = writable();
	let outerHeight = writable();

	let innerWidth = derived(outerWidth, ($outerWidth) => {
		return $outerWidth - margins.left - margins.right;
	});
	let innerHeight = derived(outerHeight, ($outerHeight) => {
		return $outerHeight - margins.top - margins.bottom;
	});

	let scales = writable({});
	let accessors = writable({});

	setContext(svg, { margins, innerWidth, innerHeight, scales, accessors, data });
	// console.log(data);
</script>

<div
	class="svg-wrapper"
	style="width: {width}; height: {height}"
	bind:clientWidth={$outerWidth}
	bind:clientHeight={$outerHeight}
>
	<svg width={$outerWidth} height={$outerHeight}>
		<g transform="translate({(margins.left, margins.top)})">
			<slot />
		</g>
	</svg>
</div>
