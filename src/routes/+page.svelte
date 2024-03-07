<script>
	import About from '$lib/components/elements/About.svelte';
	import Footer from '$lib/components/elements/Footer.svelte';
	import Header from '$lib/components/elements/Header.svelte';
	import Links from '$lib/components/elements/Links.svelte';
	import Projects from '$lib/components/elements/Projects.svelte';
</script>

<svelte:head>
	<title>Fyxren - Professional idiot, coder, gamer</title>
	<meta name="description" content="Welcome to my little corner of the internet." />
	
</svelte:head>

<main class="px-4 lg:px-20">
	<Header />
	<About />
	<Projects />
	<Links />
</main>

<Footer />
