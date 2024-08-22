<script>
	import { ModeWatcher } from 'mode-watcher';
	import '../app.css';
	import Navbar from '$lib/components/elements/Navbar.svelte';
	import meta from '$lib/data/meta';
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>{meta.title}</title>
	<meta name="title" content={meta.title} />
	<meta name="description" content={meta.description} />
	<meta name="theme-color" content={meta.themeColor} />
	<meta name="keywords" content={meta.keywords.join(',')} />
	<meta name="author" content={meta.author} />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={meta.url} />
	<meta property="og:title" content={meta.title} />
	<meta property="og:description" content={meta.description} />
	<meta property="og:image" content={meta.image} />
	<meta property="og:site_name" content={meta.siteName} />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={meta.url} />
	<meta property="twitter:title" content={meta.title} />
	<meta property="twitter:description" content={meta.description} />
	<meta property="twitter:image" content={meta.image} />
</svelte:head>

<ModeWatcher />
<Navbar />
<div class="px-4 lg:px-20">
	<slot />
</div>
