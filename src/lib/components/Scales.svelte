<script>
	import { getContext } from 'svelte';

	let { width, height } = getContext('dimensions');

	$: console.log($width);
</script>
