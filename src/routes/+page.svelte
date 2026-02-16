<script lang="ts">
	import { list } from '$lib/services/recipes/state.svelte';
</script>

<h1>Recipes</h1>

<ul>
	{#each list as recipe (recipe.id)}
		<li><a href="/recipes/{recipe.id}">{recipe.title}</a></li>
	{/each}
</ul>
