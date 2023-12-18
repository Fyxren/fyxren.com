<script lang="ts">
	// @ts-expect-error
	// eslint-disble-next-line no-undef
	const pkg = __PACKAGE__;
</script>

<footer class="mb-10 space-y-8">
	<hr class="!border-t-2" />
	<div class="grid space-y-2 text-center md:text-start md:grid-cols-8 px-5 md:px-24 xl:px-52">
		<div class="md:col-span-2">(✿◠‿◠)</div>
		<div class="md:col-span-4 text-center md:place-self-center">
			Hand-crafted with equal parts
			<span class="text-primary-500">dedication</span>
			and
			<span class="text-primary-500">procrastination.</span>
		</div>
		<div class="md:col-span-2 md:place-self-end hover:text-primary-500 duration-300">
			<a href="https://github.com/Fyxren/fyxren.com/releases">
				{pkg.version}
			</a>
		</div>
	</div>
</footer>
