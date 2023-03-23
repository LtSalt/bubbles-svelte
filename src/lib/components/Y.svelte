<script>
	import { derived } from 'svelte/store';
	import { getContext } from 'svelte';
	import { svg } from '$lib/context/contextKeys';

	export let scale = () => {};
	export let accessor;

	let { innerHeight, scales, data } = getContext(svg);

	let y = derived(innerHeight, ($innerHeight) => {
		return scale.domain([0, data[accessor]]).range([$innerHeight, 0]);
	});

	$scales = { ...$scales, y };
</script>
