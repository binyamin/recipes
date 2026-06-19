<script lang="ts">
	import '../css/main.css';
	import { SITE_NAME } from '$lib';
	import IconPlus from '~icons/lucide/plus';

	let { children } = $props();
</script>

<svelte:head>
	<title>{SITE_NAME}</title>
</svelte:head>

<style>
	.site-header {
		padding-block: var(--space-s);
		border-block-end: 2px solid black;
	}

	.site-footer {
		padding-block: var(--space-s);
	}
</style>

<div class="cover" style:--container-max-width="var(--container-m)">
	<nav class="site-header">
		<div class="repel | container">
			<a href="/">{SITE_NAME}</a>

			<a href="/recipes/new"><IconPlus class="icon" /> New Recipe</a>
		</div>
	</nav>
	<main class="cover_target | container">{@render children()}</main>
	<footer class="site-footer | container">
		<p>Copyright 2026 <a href="https://binyam.in">Binyamin Green</a></p>
	</footer>
</div>
