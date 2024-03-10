<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import type { Link } from '$lib/types/global.interface';
	import { ExternalLink } from 'lucide-svelte';

	export let link: Link;
</script>

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
