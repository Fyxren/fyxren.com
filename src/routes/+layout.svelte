<script>
	import '../app.css';
	import meta from '$lib/util/meta';
</script>

<div class="p-5 md:px-20 lg:px-52 scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-blue-500 scrollbar-corner-green-500">
	<slot />
</div>

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
