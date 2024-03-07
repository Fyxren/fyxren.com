<script>
	import { ModeWatcher } from 'mode-watcher';
	import '../app.css';
	import Navbar from '$lib/components/elements/Navbar.svelte';
</script>

<ModeWatcher />
<Navbar />
<slot />