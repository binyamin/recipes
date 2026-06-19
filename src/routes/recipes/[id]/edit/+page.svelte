<script lang="ts">
	import { list, update } from '$lib/services/recipes/state.svelte';
	import RecipeForm from '$lib/ui/recipes/Form.svelte';
	import type { HTMLFormAttributes } from 'svelte/elements';
	import type { PageProps } from './$types';

	let { params }: PageProps = $props();

	let recipe = $derived(list.find((v) => v.id === params.id));

	const onsubmit: HTMLFormAttributes['on:submit'] = (e) => {
		e.preventDefault();
		const data = new FormData(e.currentTarget);

		update(params.id, {
			title: data.get('title') as string,
			ingredients: data.getAll('ingredients') as string[],
			steps: data.getAll('steps') as string[],
		});

		e.currentTarget.reset();
	};
</script>

<h1>Edit Recipe</h1>

<RecipeForm {onsubmit} {recipe} />
