<script>
	import links from '$lib/data/links';
	import LinkCard from '../atoms/LinkCard.svelte';
</script>

<div class="py-8" id="links">
	<h1 class="text-4xl font-thin">Links</h1>
	<div class="grid gap-8 mt-4 lg:grid-cols-2">
		<div class="grid gap-4 lg:grid-cols-2">
			{#each links.socials as link (link.name)}
				<LinkCard {link} />
			{/each}
		</div>
		<div class="grid gap-4 lg:grid-cols-2">
			{#each links.links as link (link.name)}
				<LinkCard {link} />
			{/each}
		</div>
	</div>
</div>
