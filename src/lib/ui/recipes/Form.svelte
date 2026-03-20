<script lang="ts">
	import { type RecipeInput } from '$lib/services/recipes/models';
	import type { HTMLFormAttributes } from 'svelte/elements';
	import ListControl from '../controls/List.svelte';

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

	<ListControl label="Ingredients" value={recipe?.ingredients}>
		{#snippet input(props, i)}
			<label for={props.id} class="visually-hidden">Ingredient #{i + 1}</label>
			<input {...props} name="ingredients" type="text" min="1" required />
		{/snippet}
	</ListControl>

	<ListControl label="Steps" value={recipe?.steps}>
		{#snippet input(props, i)}
			<label for={props.id}>
				<span class="visually-hidden">Step</span>
				{i + 1}
			</label>
			<input {...props} name="steps" type="text" required min="1" />
		{/snippet}
	</ListControl>

	<button type="submit">Save</button>
</form>
