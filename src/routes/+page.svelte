<script lang="ts">
	import { list } from '$lib/services/recipes/state.svelte';

	// prioritize recently updated recipes
	let sorted = $derived(list.toSorted((a, b) => +b.updatedAt - +a.updatedAt));
</script>

<h1 class="text-heading text-4xl">Recipes</h1>

{#if sorted.length > 0}
	<ul>
		{#each sorted as recipe (recipe.id)}
			<li><a href="/recipes/{recipe.id}">{recipe.title}</a></li>
		{/each}
	</ul>
{:else}
	<!-- empty state -->
{/if}
