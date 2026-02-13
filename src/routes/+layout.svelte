<script lang="ts">
	let { children } = $props();
</script>

<svelte:head>
	<title>Svelte App</title>
	<link rel="icon" href="data:," />
</svelte:head>

{@render children?.()}
