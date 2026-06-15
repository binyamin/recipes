<script lang="ts">
	import '../css/main.css';
	import { SITE_NAME } from '$lib';
	import IconPlus from '~icons/lucide/plus';

	let { children } = $props();
</script>

<svelte:head>
	<title>{SITE_NAME}</title>
	<link rel="icon" href="data:," />
</svelte:head>

<div class="container">
	<header>
		<nav class="repel | region">
			<a href="/" class="logo">{SITE_NAME}</a>

			<a
				href="/recipes/new"
				class="button | cluster"
				style:--cluster-valign="center"
				style:--cluster-gap="var(--space-3xs)"
				data-button-variant="secondary"
			><IconPlus /> New Recipe</a>
		</nav>
	</header>
	<main class="region">{@render children()}</main>
</div>
