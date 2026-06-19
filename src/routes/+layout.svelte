<script lang="ts">
	import '../css/main.css';
	import { SITE_NAME } from '$lib';
	import IconPlus from '~icons/lucide/plus';

	let { children } = $props();
</script>

<svelte:head>
	<title>{SITE_NAME}</title>
</svelte:head>

<div>
	<header>
		<nav>
			<a href="/">{SITE_NAME}</a>

			<a href="/recipes/new"><IconPlus /> New Recipe</a>
		</nav>
	</header>
	<main>{@render children()}</main>
</div>
