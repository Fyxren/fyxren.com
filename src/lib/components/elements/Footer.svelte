<script lang="ts">
	// @ts-expect-error
	// eslint-disble-next-line no-undef
	const pkg = __PACKAGE__;
</script>

<footer class="mb-10 space-y-8">
	<hr class="!border-t-2" />
	<div class="grid grid-cols-8 px-52">
		<div class="col-span-2">(✿◠‿◠)</div>
		<div class="col-span-4 place-self-center">
			Hand-crafted with equal parts
			<span class="text-primary-500">dedication</span>
			and
			<span class="text-primary-500">procrastination.</span>
		</div>
		<div class="col-span-2 place-self-end">
			<a href="https://github.com/Fyxren/fyxren.com/releases">
				{pkg.version}
			</a>
		</div>
	</div>
</footer>
