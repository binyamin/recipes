<script lang="ts">
	import type { HTMLFormAttributes } from 'svelte/elements';
	import ListControl from '../controls/List.svelte';

	interface Props extends HTMLFormAttributes {}

	let { ...rest }: Props = $props();

	const uid = $props.id();
</script>

<form {...rest}>
	<label for="{uid}-title">Title</label>
	<input id="{uid}-title" name="title" type="text" min={1} required />

	<ListControl label="Ingredients">
		{#snippet input({id}, i)}
			<label for="{uid}-ingredients-{id}" class="visually-hidden">
				Ingredient #{i+1}
			</label>
			<input
				id="{uid}-ingredients-{id}"
				name="ingredients"
				type="text"
				min="1"
				required
			/>
		{/snippet}
	</ListControl>

	<ListControl label="Steps">
		{#snippet input({id}, i)}
			<label for="{uid}-steps-{id}">
				<span class="visually-hidden">Step </span>
				{i+1}
			</label>
			<input id="{uid}-steps-{id}" name="steps" type="text" required min="1" />
		{/snippet}
	</ListControl>

	<button type="submit">Save</button>
</form>
