<script lang="ts">
	import type { Project } from '$lib/types/projects.interface';
	import { ExternalLink, Github } from 'lucide-svelte';

	export let project: Project;
</script>

<article class="card p-4 flex flex-col justify-between space-y-8 h-full">
	<div>
		<h1 class="text-xl font-medium tracking-wider">{project.name}</h1>
		<p>{project.description}</p>
	</div>
	<div class="flex gap-2">
		<span
			class="chip capitalize cursor-default"
			class:variant-ghost-success={project.status === 'active'}
			class:variant-ghost-warning={project.status === 'on hold'}
			class:variant-ghost-error={project.status === 'deprecated'}
			class:variant-ghost-tertiary={project.status === 'work in progress'}>{project.status}</span
		>
		{#each project.chips as chip}
			{#if chip.type === 'text'}
				<span class="chip variant-outline-primary capitalize cursor-default">{chip.text}</span>
			{:else if chip.type === 'link'}
				<a href={chip.link} target="_blank">
					<span
						class="chip variant-outline-primary hover:variant-ghost-primary capitalize duration-300"
					>
						{chip.text ?? 'Link'}
						<ExternalLink class="w-4 h-4 ml-1" />
					</span>
				</a>
			{:else if chip.type === 'github'}
				<a href={chip.link} target="_blank">
					<span
						class="chip variant-outline-primary hover:variant-ghost-primary capitalize duration-300"
					>
						GitHub
						<Github class="w-4 h-4 ml-1" />
					</span>
				</a>
			{/if}
		{/each}
	</div>
</article>
