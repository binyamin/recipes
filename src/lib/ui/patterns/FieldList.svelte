<script lang="ts">
	import { useId } from '$lib/utils/use-id';
	import type { Snippet } from 'svelte';

	let uid = $props.id();

	interface Props {
		label: string;
		input: Snippet<[props: { id: string; value: string }, idx: number]>;
		value?: string[];
	}

	let { input, label, value = $bindable(['']) }: Props = $props();

	let list = $state<[id: string, value: string][]>(
		value.map((v) => [useId(), v]),
	);

	function remove(i: number) {
		list.splice(i, 1);
	}

	function add(i: number) {
		list.splice(i + 1, 0, [useId(), '']);
	}
</script>

<fieldset>
	<legend>{label}</legend>

	{#each list as [id, str], i (id)}
		<div>
			{@render input({ id: `${uid}-${id}`, value: str }, i)}
			{#if i > 0}
				<button type="button" onclick={() => remove(i)}>Delete</button>
			{/if}
			<button type="button" onclick={() => add(i)}>Add</button>
		</div>
	{/each}
</fieldset>
