<script lang="ts">
	import { list } from '$lib/services/recipes/state.svelte';
	import type { PageProps } from './$types';

	let { params }: PageProps = $props();

	let recipe = $derived(list.find((v) => v.id === params.id));
</script>

{#if !recipe}
<!-- missing state -->
{:else}
	<article>
		<h1>{recipe.title}</h1>

		<h2>Ingredients</h2>
		<ul>
			{#each recipe.ingredients as item}
				<li>{item}</li>
			{/each}
		</ul>

		<h2>Steps</h2>
		<ol>
			{#each recipe.steps as step}
				<li>{step}</li>
			{/each}
		</ol>
	</article>
{/if}
