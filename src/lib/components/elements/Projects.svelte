<script>
	import projects from '$lib/data/projects';
	import ProjectCard from '../atoms/ProjectCard.svelte';
</script>

<div id="projects" class="mb-20 space-y-4">
	<h1 class="h1 font-thin tracking-wider">Projects</h1>
	<div class="grid xl:grid-cols-2 gap-4">
		{#each projects as project}
			<ProjectCard {project} />
		{/each}
	</div>
</div>
