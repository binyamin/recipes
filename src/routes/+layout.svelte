<script lang="ts">
	import { SITE_NAME } from '$lib';
	import '../css/main.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>{SITE_NAME}</title>
	<link rel="icon" href="data:," />
</svelte:head>

<header>
	<nav class="repel"><a href="/">{SITE_NAME}</a></nav>
</header>
<main>{@render children()}</main>
