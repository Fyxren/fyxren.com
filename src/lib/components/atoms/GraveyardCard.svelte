<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import { User } from 'lucide-svelte';
	import type { GraveyardProject } from '$lib/types/global.interface';

	export let project: GraveyardProject;

	const TypeMap = {
		website: 'Website',
		bot: 'Discord Bot',
		other: 'Other'
	};
</script>

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
