<script>
	import { setContext } from 'svelte';
	import { writable, derived } from 'svelte/store';
	import { dimensions } from '$lib/context/contextKeys';

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

	setContext(dimensions, { margins, innerWidth, innerHeight });
</script>

<div
	class="svg-wrapper"
	style="width: {width}; height: {height}"
	bind:clientWidth={$outerWidth}
	bind:clientHeight={$outerHeight}
>
	<svg width={$outerWidth} height={$outerHeight}>
		<g>
			<slot />
		</g>
	</svg>
</div>
