<script>
	import * as Card from '$lib/components/ui/card';
	import links from '$lib/data/links';
	import { ExternalLink } from 'lucide-svelte';
</script>

<div class="py-8" id="links">
	<h1 class="text-4xl font-thin">Links</h1>
	<div class="grid gap-8 mt-4 lg:grid-cols-2">
		<div class="grid gap-4 lg:grid-cols-2">
			{#each links.socials as link (link.name)}
				<a href={link.url} target="_blank">
					<Card.Root class="duration-150 hover:bg-accent">
						<Card.Header>
							<Card.Title class="flex items-center gap-2">
								{link.name}
								<ExternalLink class="w-4 h-4" />
							</Card.Title>
							<Card.Description>{link.username}</Card.Description>
						</Card.Header>
					</Card.Root>
				</a>
			{/each}
		</div>
		<div class="grid gap-4 lg:grid-cols-2">
			{#each links.links as link (link.name)}
				<a href={link.url} target="_blank">
					<Card.Root class="duration-150 hover:bg-accent">
						<Card.Header>
							<Card.Title class="flex items-center gap-2">
								{link.name}
								<ExternalLink class="w-4 h-4" />
							</Card.Title>
							<Card.Description>{link.username}</Card.Description>
						</Card.Header>
					</Card.Root>
				</a>
			{/each}
		</div>
	</div>
</div>
