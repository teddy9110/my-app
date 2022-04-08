<script context="module">
	export async function load({ params, fetch }) {
		const res = await fetch('https://rickandmortyapi.com/api/character/'+params.character);
		let chars = await res.json();
		return {
			props: {
				chars
			}
		};
	}
</script>

<script lang="ts">
	export let chars;
</script>

<svelte:head>
	<title>Characters</title>
</svelte:head>

<div class="chars">
	<h1>Characters</h1>
	<div>
			<div class="middle">
			<a href="/character">
				<div class="lineItem">{chars.id}</div>
				<div class="lineItem">{chars.name}</div>
				<div class="lineItem">{chars.status}</div>
				<div class="lineItem">{chars.species}</div>
				<div class="lineItem">{chars.type}</div>
			</a>
			</div>
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
