<script lang="ts">
	import { type RecipeInput } from '$lib/features/recipes/schema';
	import FieldList from '$lib/ui/patterns/FieldList.svelte';
	import type { HTMLFormAttributes } from 'svelte/elements';

	interface Props extends HTMLFormAttributes {
		/**
		 * pre-fill recipe data
		 */
		recipe?: RecipeInput;
	}

	let { recipe, ...rest }: Props = $props();

	const uid = $props.id();
</script>

<form {...rest}>
	<label for="{uid}-title">Title</label>
	<input
		id="{uid}-title"
		name="title"
		type="text"
		min={1}
		required
		value={recipe?.title}
	/>

	<FieldList label="Ingredients" value={recipe?.ingredients}>
		{#snippet input(props, i)}
			<label for={props.id} class="visually-hidden">Ingredient #{i + 1}</label>
			<input {...props} name="ingredients" type="text" min="1" required />
		{/snippet}
	</FieldList>

	<FieldList label="Steps" value={recipe?.steps}>
		{#snippet input(props, i)}
			<label for={props.id}>
				<span class="visually-hidden">Step</span>
				{i + 1}
			</label>
			<input {...props} name="steps" type="text" required min="1" />
		{/snippet}
	</FieldList>

	<button type="submit">Save</button>
</form>
