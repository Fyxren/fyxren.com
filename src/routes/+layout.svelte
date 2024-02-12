<script>
	import { ModeWatcher } from 'mode-watcher';
	import '../app.css';
	import Navbar from '$lib/components/elements/Navbar.svelte';
</script>

<ModeWatcher />
<Navbar />
<slot />

<!-- Tailwind breakpoint checker -->
<div class="absolute bottom-0 left-0">
	<div class="hidden sm:block md:hidden lg:hidden xl:hidden">
		<p>sm</p>
	</div>
	<div class="hidden sm:hidden md:block lg:hidden xl:hidden">
		<p>md</p>
	</div>
	<div class="hidden sm:hidden md:hidden lg:block xl:hidden">
		<p>lg</p>
	</div>
	<div class="hidden sm:hidden md:hidden lg:hidden xl:block">
		<p>xl</p>
	</div>
</div>
