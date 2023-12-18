<script lang="ts">
	import { fade } from 'svelte/transition';

	const NavItems = [
		{
			name: 'About',
			href: '#about'
		},
		{
			name: 'Projects',
			href: '#projects'
		},
		{
			name: 'Contact',
			href: '#contact'
		}
	];

	function handleAnchorClick(event: MouseEvent) {
		event.preventDefault();
		const link = event.currentTarget as HTMLAnchorElement;
		const anchorId = new URL(link.href).hash.replace('#', '');
		const anchor = document.getElementById(anchorId);
		window.scrollTo({
			top: anchor?.offsetTop,
			behavior: 'smooth'
		});
	}

	let atTop = true;
	function handleScroll(event: Event) {
		atTop = window.scrollY === 0;
	}
</script>

<svelte:window on:scroll={handleScroll} />
<div class="h-screen flex flex-col">
	<div class="place-self-center py-2 px-10 mt-2 flex gap-10 sticky">
		{#each NavItems as nav}
			<a href={nav.href} on:click={handleAnchorClick} class="btn btn-sm border-b-2 border-transparent hover:border-primary-500">
				{nav.name}
			</a>
		{/each}
	</div>
	<div class="flex flex-col justify-center h-screen space-y-4">
		<h1 class="text-7xl font-thin tracking-wider">Fyxren</h1>
		<p class="text-xl italic tracking-wide">Smart Industry student, hobbyist coder and gamer.</p>
	</div>

	{#if atTop}
		<a
			href="#about"
			class="scale-[1.75] place-self-center absolute bottom-10 hover:scale-150 duration-300 hover:opacity-80"
			transition:fade={{ duration: 500 }}
			on:click={handleAnchorClick}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-arrow-down-circle"
				><circle cx="12" cy="12" r="10" /><path d="M12 8v8" /><path d="m8 12 4 4 4-4" /></svg
			>
		</a>
	{/if}
</div>
