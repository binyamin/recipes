<script lang="ts">
	import { SITE_NAME } from '$lib';

	let { children } = $props();
</script>

<svelte:head>
	<title>{SITE_NAME}</title>
	<link rel="icon" href="data:," />
</svelte:head>

{@render children?.()}
