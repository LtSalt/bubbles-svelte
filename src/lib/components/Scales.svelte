<script>
	import { getContext } from 'svelte';

	let { innerWidth, innerHeight } = getContext('dimensions');

	$: console.log($innerWidth);
</script>
