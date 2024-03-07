<script lang="ts">
	import { onMount } from 'svelte';
	import * as Card from '$lib/components/ui/card';
	import type { Repo } from '$lib/types/global.interface';
	import { Button } from '$lib/components/ui/button';
	import { ExternalLink, GitFork, Github, Languages, Star, Archive } from 'lucide-svelte';

	let repos: Repo[] = [];

	onMount(async () => {
		const response = await fetch('https://api.github.com/users/Fyxren/repos');
		repos = await response.json();
	});
</script>

<div class="py-8">
	<h1 class="text-4xl font-thin">Projects</h1>
	<div class="grid gap-2 mt-4 lg:gap-8 lg:grid-cols-2">
		{#each repos as repo (repo.id)}
			<Card.Root class="h-full">
				<Card.Header>
					<Card.Title class="flex items-center gap-2">
						{#if repo.archived}
							<Archive class="w-4 h-4" />
							{#if repo.fork}
								<span class="text-accent">•</span>
							{/if}
						{/if}
						{#if repo.fork}
							<GitFork class="w-4 h-4" />
						{/if}
						{repo.name}
					</Card.Title>
					<Card.Description>{repo.description}</Card.Description>
				</Card.Header>
				<Card.Content class="flex items-center gap-4">
					{#if repo.language}
						<p class="flex items-center gap-1 text-sm">
							<Languages class="w-4 h-4" />
							{repo.language}
						</p>
						{#if repo.stargazers_count || repo.forks_count}
							<span class="text-accent">•</span>
						{/if}
					{/if}
					{#if repo.stargazers_count}
						<p class="flex items-center gap-1 text-sm">
							<Star class="w-4 h-4" />
							{repo.stargazers_count}
						</p>
						{#if repo.forks_count}
							<span class="text-accent">•</span>
						{/if}
					{/if}
					{#if repo.forks_count}
						<p class="flex items-center gap-1 text-sm font-bold">
							<GitFork class="w-4 h-4" />
							{repo.forks_count}
						</p>
					{/if}
				</Card.Content>
				<Card.Footer class="items-end gap-4">
					<Button variant="outline" href={repo.html_url}>
						Github
						<Github class="w-4 h-4 ml-2" />
					</Button>
					{#if repo.homepage}
						<Button variant="outline" href={repo.homepage}>
							Website
							<ExternalLink class="w-4 h-4 ml-2" />
						</Button>
					{/if}
					<!-- <p>Card Footer</p> -->
				</Card.Footer>
			</Card.Root>
		{/each}
	</div>
</div>
