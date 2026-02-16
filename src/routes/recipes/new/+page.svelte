<script lang="ts">
	import type { HTMLFormAttributes } from 'svelte/elements';
	import { create } from '$lib/services/recipes/state.svelte';
	import RecipeForm from '$lib/ui/recipes/Form.svelte';

	const onsubmit: HTMLFormAttributes['on:submit'] = (e) => {
		e.preventDefault();
		const data = new FormData(e.currentTarget);

		create({
			title: data.get('title') as string,
			ingredients: data.getAll('ingredients') as string[],
			steps: data.getAll('steps') as string[],
		});

		e.currentTarget.reset();
	};
</script>

<h1>Create a Recipe</h1>

<RecipeForm {onsubmit} />
