<script lang="ts">
	import graveyard from '$lib/data/graveyard';
	import * as Card from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import { User } from 'lucide-svelte';
	import meta from '$lib/data/meta';

	const TypeMap = {
		website: 'Website',
		bot: 'Discord Bot',
		other: 'Other'
	};

	let pageMeta = {
		title: `Graveyard • ` + meta.title,
		description:
			"A painful reminder of the past. Here lies in no particular order the projects that have been killed or didn't make the light of day. May they rest in peace and maybe one day, they'll be resurrected."
	};
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>{pageMeta.title}</title>
	<meta name="title" content={pageMeta.title} />
	<meta name="description" content={pageMeta.description} />
	<meta name="theme-color" content={meta.themeColor} />
	<meta name="keywords" content={meta.keywords.join(',')} />
	<meta name="author" content={meta.author} />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={meta.url} />
	<meta property="og:title" content={pageMeta.title} />
	<meta property="og:description" content={pageMeta.description} />
	<meta property="og:image" content={meta.image} />
	<meta property="og:site_name" content={meta.siteName} />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={meta.url} />
	<meta property="twitter:title" content={pageMeta.title} />
	<meta property="twitter:description" content={pageMeta.description} />
	<meta property="twitter:image" content={meta.image} />
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
	<div class="grid grid-cols-3 gap-8">
		{#each graveyard as project}
			<Card.Root class="flex flex-col justify-between duration-200 hover:scale-105 hover:rotate-1">
				<Card.Header>
					<Card.Title>{project.title}</Card.Title>
					<Card.Description>{project.description}</Card.Description>
				</Card.Header>
				<Card.Footer class="flex items-center justify-between">
					<div class="flex items-center gap-2">
						{#if project.killed}
							<Badge variant="destructive">Terminated</Badge>
						{/if}
						{#if project.group && project.group.length > 0}
							<Badge>Group Project</Badge>
						{/if}
						<Badge variant="secondary">{TypeMap[project.type]}</Badge>
						{#each project.tags as tag}
							<Badge variant="outline">{tag}</Badge>
						{/each}
					</div>
					<div class="flex items-center gap-1">
						{#if project.group && project.group.length > 0}
							<div class="flex items-center px-3 rounded-t">
								{#each project.group as user}
									<Tooltip.Root>
										<Tooltip.Trigger>
											<User class="w-4 duration-200 text-muted-foreground hover:text-primary" />
										</Tooltip.Trigger>
										<Tooltip.Content>
											<p>{user}</p>
										</Tooltip.Content>
									</Tooltip.Root>
								{/each}
							</div>
						{/if}
					</div>
				</Card.Footer>
			</Card.Root>
		{/each}
	</div>
</main>
