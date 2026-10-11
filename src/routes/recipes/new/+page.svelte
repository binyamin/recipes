<script lang="ts">
	import RecipeForm from '$lib/features/recipes/components/Form.svelte';
	import { create } from '$lib/features/recipes/state.svelte';
	import type { HTMLFormAttributes } from 'svelte/elements';

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
