<script lang="ts">
	import '../css/main.css';
	import { SITE_NAME } from '$lib';

	let { children } = $props();
</script>

<svelte:head>
	<title>{SITE_NAME}</title>
</svelte:head>

<style>
	.logo {
		color: currentColor;
		font-weight: 700;
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}
</style>

<div class="cover | container py-s">
	<header>
		<nav class="repel">
			<a href="/" class="logo">{SITE_NAME}</a>
		</nav>
	</header>
	<main data-grow>{@render children()}</main>
	<footer class="center">
		<p>A project by <a href="https://binyam.in">Binyamin Green</a></p>
	</footer>
</div>
