<script lang="ts">
	import type { Snippet } from 'svelte';
	import { useId } from '$lib/utils/use-id';

	let list = $state<[id: string, value: string][]>([[useId(), '']]);

	function remove(i: number) {
		list.splice(i, 1);
	}

	function add(i: number) {
		list.splice(i + 1, 0, [useId(), '']);
	}

	interface Props {
		label: string;
		input: Snippet<[data: { id: string }, idx: number]>;
	}

	let { input, label }: Props = $props();
</script>

<fieldset>
	<legend>{label}</legend>

	{#each list as [id], i (id)}
		<div>
			{@render input({id}, i)}
			{#if i > 0}
				<button type="button" onclick={() => remove(i)}>Delete</button>
			{/if}
			<button type="button" onclick={() => add(i)}>Add</button>
		</div>
	{/each}
</fieldset>
