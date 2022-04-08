<script lang="ts">
	import { enhance } from '$lib/form';
	import { scale } from 'svelte/transition';
	import { flip } from 'svelte/animate';

	type interfaceChar = {
		id: string;
		name: string;
		status: string;
		species: string;
		type: string;
		gender: string;
		origin: {};
		location: {};
		image: string;
		episode: [];
		url: string;
		created: string;
	};

	export let characters: interfaceChar[];
</script>

<svelte:head>
	<title>Characters</title>
</svelte:head>
<div class="todos">
	<h1>Characters</h1>
	{#each characters as info}
	<div>{info.id}</div>
	{/each}
</div>

<style>
	.todos {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
		line-height: 1;
	}

</style>
