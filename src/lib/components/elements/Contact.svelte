<script lang="ts">
	import contact from '$lib/data/contact';
</script>

<div id="contact" class="mb-20 space-y-4">
	<h1 class="h1 font-thin tracking-wider">Contact</h1>
	<div class="grid grid-cols-2 gap-4">
		<div class="space-y-2">
			<h2 class="h3 font-thin tracking-wider">Socials</h2>
			<div class="grid grid-cols-2 gap-2 justify-between">
				{#each contact.socials as social}
					<a
						href={social.url}
						target="_blank"
						class="card p-4 w-full flex items-center gap-2 hover:-translate-y-1"
					>
						<img
							class:invert={social.invertSvg}
							src="/icons/{social.icon}.svg"
							alt="{social.name} logo"
							class="w-6 h-6"
						/>
						<span>{social.name}</span>
					</a>
				{/each}
			</div>
		</div>
		<div class="space-y-2">
			<h2 class="h3 font-thin tracking-wider">Other Links</h2>
			<div class="grid grid-cols-2 gap-2 justify-between">
				{#each contact.links as social}
					<a
						href={social.url}
						target="_blank"
						class="card p-4 w-full flex items-center gap-2 hover:-translate-y-1"
					>
						<img
							class:invert={social.invertSvg}
							src="/icons/{social.icon}.svg"
							alt="{social.name} logo"
							class="w-6 h-6"
						/>
						<span>{social.name}</span>
					</a>
				{/each}
			</div>
		</div>
	</div>
</div>
