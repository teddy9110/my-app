<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('https://rickandmortyapi.com/api/character');
		let chars = await res.json();
		chars = chars.results;
		return {
			props: {
				chars
			}
		};
	}
</script>

<script lang="ts">
	import { enhance } from '$lib/form';
	import { scale } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	export let chars;
</script>

<svelte:head>
	<title>Characters</title>
</svelte:head>

<div class="chars">
	<h1>Characters</h1>
	<div>
		{#each chars as info}
			<div class="middle">
			<a href="/character">
				<div class="lineItem">{info.id}</div>
				<div class="lineItem">{info.name}</div>
				<div class="lineItem">{info.status}</div>
				<div class="lineItem">{info.species}</div>
				<div class="lineItem">{info.type}</div>
			</a>
			</div>
		{/each}
	</div>
</div>

<style>
	.lineItem {
		margin-bottom: 0.5em;
		margin-top: 0.5em;
	}
	.chars {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
		line-height: 1;
	}
	.middle {
		margin: 1em;
		text-align: center;
		background-color: #fff;
		border-radius: 0.5rem;
		box-shadow: 0.05rem 0.1rem 0.3rem -0.03rem rgba(0, 0, 0, 0.45);
		padding-bottom: 1rem;
		background-image: linear-gradient(var(--card-gradient), white max(9.5rem, 27vh));
		overflow: hidden;
	}
</style>
