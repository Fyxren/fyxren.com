<script lang="ts">
	// @ts-expect-error
	// eslint-disble-next-line no-undef
	const pkg = __PACKAGE__;

	import Button from '../ui/button/button.svelte';
</script>

<footer class="mb-10 space-y-8">
	<hr class="border-t" />
	<div class="grid px-5 space-y-2 text-center md:text-start md:grid-cols-8 md:px-24 xl:px-52">
		<div class="md:col-span-2">(✿◠‿◠)</div>
		<div class="text-center md:col-span-4 md:place-self-center">
			Hand-crafted with equal parts
			<span class="text-primary">dedication</span>
			and
			<span class="text-primary">procrastination.</span>
		</div>
		<div class="duration-300 md:col-span-2 md:place-self-end">
			<Button variant="link" href="https://github.com/Fyxren/fyxren.com/releases" class="font-normal text-foreground">
				{pkg.version}
			</Button>
		</div>
	</div>
</footer>
