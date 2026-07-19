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
	.root {
		--container-max-width: var(--container-s);

		padding-block: var(--space-s);
	}
</style>

<div class="root cover container">
	<nav class="repel">
		<a href="/">{SITE_NAME}</a>

		<a href="/recipes/new"><IconPlus class="icon" /> New Recipe</a>
	</nav>
	<main class="cover_target">{@render children()}</main>
	<footer class="center">
		<p>Copyright 2026 <a href="https://binyam.in">Binyamin Green</a></p>
	</footer>
</div>
