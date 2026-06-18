<script lang="ts">
	import { list, remove } from '$lib/services/recipes/state.svelte';
	import type { PageProps } from './$types';

	let { params }: PageProps = $props();

	let recipe = $derived(list.find((v) => v.id === params.id));

	function onDelete() {
		// We have no way to retrieve the recipe once it's deleted, so
		// we explain that to the user and allow them to cancel the action.
		const shouldDelete = confirm(
			'Once you delete this recipe, you cannot retrieve it. Really delete it?',
		);

		if (shouldDelete) {
			const result = remove(params.id);

			// When result is `false`, it means there is no recipe with that id param.
			// That should never happen, because we wrap the markup in a conditional.
			// Still, we'll handle the scenario, because "you never know".
			if (!result) {
				alert(
					[
						'Error while deleting recipe.',
						`timestamp: ${new Date().toISOString()}`,
						`id: ${params.id}`,
						'reason: recipe does not exist',
					].join('\n'),
				);
			} else {
				// TODO: redirect to list page
				// TODO: flash success message
			}
		}
	}
</script>

{#if !recipe}
	<!-- missing state -->
{:else}
	<article>
		<h1 class="text-title">{recipe.title}</h1>

		<a href="/recipes/{params.id}/edit">edit</a>
		<button type="button" onclick={onDelete}>Delete</button>

		<p>
			{#if +recipe.createdAt === +recipe.updatedAt}
				Written
			{:else}
				Last updated
			{/if}
			<time datetime={recipe.updatedAt.toISOString()}>
				{recipe.updatedAt.toLocaleDateString('en', { dateStyle: 'long' })}
			</time>
		</p>

		<h2 class="text-heading">Ingredients</h2>
		<ul>
			{#each recipe.ingredients as item}
				<li>{item}</li>
			{/each}
		</ul>

		<h2 class="text-heading">Steps</h2>
		<ol>
			{#each recipe.steps as step}
				<li>{step}</li>
			{/each}
		</ol>
	</article>
{/if}
