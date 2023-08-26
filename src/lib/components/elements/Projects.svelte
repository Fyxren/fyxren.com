<script lang="ts">
	import { onMount } from 'svelte';
	import type { IRepo } from '$lib/util/global.interface';
	import ProjectCard from '../atoms/ProjectCard.svelte';

	let repos: IRepo[];

	onMount(async () => {
		const response = await fetch('https://gh-pinned-repos.egoist.dev/?username=fyxren');
		const data = await response.json();
		repos = data.map((x: IRepo) => {
			return {
				owner: x.owner,
				title: x.repo,
				description: x.description,
				link: x.link,
				image: x.image,
				website: x.website,
				language: x.language,
				languageColor: x.languageColor,
				stars: Number(x.stars),
				forks: Number(x.forks)
			};
		});
	});
</script>

<div>
	<h1 class="text-4xl font-bold font-rubik">Projects</h1>
	<div class="grid grid-cols-2 gap-5 mt-5">
		{#if repos}
			{#each repos as repo}
				<ProjectCard {repo} />
			{/each}
		{:else}
			{#each Array(2) as _, i}
				<div class="border-2 h-60 bg-base-200 border-base-300" />
			{/each}
		{/if}
	</div>
</div>
