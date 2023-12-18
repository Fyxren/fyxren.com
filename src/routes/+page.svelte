<script lang="ts">
	import About from '$lib/components/elements/About.svelte';
	import Contact from '$lib/components/elements/Contact.svelte';
	import Footer from '$lib/components/elements/Footer.svelte';
	import Header from '$lib/components/elements/Header.svelte';
	import Projects from '$lib/components/elements/Projects.svelte';
</script>

<main class="px-5 md:px-24 xl:px-52 cursor-none">
	<Header />
	<About />
	<Projects />
	<Contact />
</main>

<Footer />
