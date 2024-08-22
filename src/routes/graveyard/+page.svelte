<script lang="ts">
	import graveyard from '$lib/data/graveyard';
	import meta from '$lib/data/meta';
	import GraveyardCard from '$lib/components/atoms/GraveyardCard.svelte';

	let pageMeta = {
		title: `Graveyard • ` + meta.title,
		description:
			"A painful reminder of the past. Here lies in no particular order the projects that have been killed or didn't make the light of day. May they rest in peace and maybe one day, they'll be resurrected.",
		url: meta.url + '/graveyard'
	};
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>{pageMeta.title}</title>
	<meta name="title" content={pageMeta.title} />
	<meta name="description" content={pageMeta.description} />

	<!-- Open Graph -->
	<meta property="og:title" content={pageMeta.title} />
	<meta property="og:description" content={pageMeta.description} />
	<meta property="og:url" content={pageMeta.url} />

	<!-- Twitter -->
	<meta property="twitter:title" content={pageMeta.title} />
	<meta property="twitter:description" content={pageMeta.description} />
	<meta property="twitter:url" content={pageMeta.url} />
</svelte:head>

<main class="py-4 space-y-8">
	<div class="flex flex-col items-center gap-2">
		<h1 class="text-4xl font-bold">Graveyard</h1>
		<p class="max-w-3xl italic text-center">
			A painful reminder of the past. Here lies in no particular order the projects that have been
			killed or didn't make the light of day. May they rest in peace and maybe one day, they'll be
			resurrected.
		</p>
		<p class="text-xs italic text-muted-foreground">
			(I may have forgotten some projects, so this list may not be exhaustive.)
		</p>
	</div>
	<div class="grid gap-8 lg:grid-cols-3">
		{#each graveyard as project}
			<GraveyardCard {project} />
		{/each}
	</div>
</main>
