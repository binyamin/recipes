<script lang="ts">
	import 'virtual:sugarcube.css';
	import '../css/main.css';
	import { SITE_NAME } from '$lib';

	let { children } = $props();
</script>

<svelte:head>
	<title>{SITE_NAME}</title>
	<link rel="icon" href="data:," />
</svelte:head>

<div class="container">
	<header>
		<nav class="repel">
			<a href="/">{SITE_NAME}</a>
		</nav>
	</header>
	<main>{@render children()}</main>
</div>
