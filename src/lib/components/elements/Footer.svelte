<script>
	import { version } from '$app/environment';
	import links from '$lib/util/links';
	import SocialIcon from '../atoms/SocialIcon.svelte';
</script>

<footer class="mb-20">
	<hr />
	<div class="flex items-center justify-between py-5">
		<div class="flex gap-2 mt-4">
			<SocialIcon link={links.github}>
				<img src="/icons/github.svg" alt="github icon" class="w-7" />
			</SocialIcon>
			<SocialIcon link={links.discord}>
				<img src="/icons/discord.svg" alt="discord icon" class="w-7" />
			</SocialIcon>
			<SocialIcon link={links.linkedIn}>
				<img src="/icons/linkedin.svg" alt="linkedin icon" class="w-7" />
			</SocialIcon>
		</div>
		<p>
			Hand-crafted with equal parts <span class="font-bold text-secondary">dedication</span> and
			<span class="font-bold text-secondary">procrastination</span>.
		</p>
		<div class="flex flex-col items-end">
			<a href="https://github.com/Fyxren/Fyxren.com" class="link link-hover">
				v{version}
			</a>
		</div>
	</div>
</footer>
