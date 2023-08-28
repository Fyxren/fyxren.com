<script lang="ts">
	import type { IRepo } from '$lib/util/global.interface';

	export let repo: IRepo;
</script>

<a href={repo.link} target="_blank">
	<article
		class="flex flex-col justify-between h-full p-5 duration-500 border-2 rounded-lg bg-base-200 border-base-300 hover:border-primary hover:shadow-xl hover:-translate-y-1"
	>
		<div>
			<div class="flex items-center gap-1">
				<img
					src={`https://github.com/${repo.owner}.png`}
					alt="repo owner"
					class="w-6 rounded-full shadow-lg"
				/>
				<h5 class="font-thin capitalize">{repo.owner}</h5>
			</div>
			<h1 class="mt-2 text-lg font-medium md:text-2xl font-rubik">{repo.title}</h1>
			<p>{repo.description}</p>
		</div>
		<div class="flex gap-4 mt-2">
			{#if repo.language}
				<div class="flex items-center gap-1 mt-2">
					<div
						class="inline-flex w-4 h-4 rounded-full"
						style="background-color: {repo.languageColor}"
					/>
					<p>{repo.language}</p>
				</div>
			{/if}
			{#if repo.stars > 0}
				<div class="flex items-center gap-1 mt-2">
					<img src="/icons/star.svg" alt="repository stars" class="w-4" />
					<p>{repo.stars}</p>
				</div>
			{/if}
			{#if repo.forks > 0}
				<div class="flex items-center gap-1 mt-2">
					<img src="/icons/fork.svg" alt="repository forks" class="w-4" />
					<p>{repo.forks}</p>
				</div>
			{/if}
		</div>
	</article>
</a>
