<script>
	import About from '$lib/components/elements/About.svelte';
	import Footer from '$lib/components/elements/Footer.svelte';
	import Header from '$lib/components/elements/Header.svelte';
	import Links from '$lib/components/elements/Links.svelte';
	import Projects from '$lib/components/elements/Projects.svelte';
	import meta from '$lib/data/meta';
</script>

<svelte:head>
	<title>{meta.title}</title>
</svelte:head>

<main>
	<Header />
	<About />
	<Projects />
	<Links />
</main>
