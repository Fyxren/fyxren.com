<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { Sun, Moon } from 'lucide-svelte';

	import { setMode, resetMode } from 'mode-watcher';
</script>

<header
	class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
	<div class="container flex items-center h-14 max-w-screen-2xl">
		<div class="hidden mr-4 md:flex">
			<a href="/" class="flex items-center mr-6 space-x-2"
				><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="w-6 h-6"
					><rect width="256" height="256" fill="none"></rect><line
						x1="208"
						y1="128"
						x2="128"
						y2="208"
						fill="none"
						stroke="#EB4F27"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="16"
					></line><line
						x1="192"
						y1="40"
						x2="40"
						y2="192"
						fill="none"
						stroke="#EB4F27"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="16"
					></line></svg
				>
				<span class="hidden font-bold sm:inline-block">Fyxren</span></a
			>
			<nav class="flex items-center gap-6 text-sm">
				<a href="/about" class="transition-colors hover:text-foreground/80 text-foreground/60"
					>About</a
				>
				<a href="/projects" class="transition-colors hover:text-foreground/80 text-foreground/60"
					>Projects</a
				>
				<a href="/contact" class="transition-colors hover:text-foreground/80 text-foreground/60"
					>Contact</a
				>
			</nav>
		</div>
		<div class="flex items-center justify-between flex-1 space-x-2 md:justify-end">
			<div class="flex items-center">
				<DropdownMenu.Root>
					<DropdownMenu.Trigger asChild let:builder>
						<Button builders={[builder]} variant="ghost" size="icon">
							<Sun
								class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
							/>
							<Moon
								class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
							/>
							<span class="sr-only">Toggle theme</span>
						</Button>
					</DropdownMenu.Trigger>
					<DropdownMenu.Content align="end">
						<DropdownMenu.Item on:click={() => setMode('light')}>Light</DropdownMenu.Item>
						<DropdownMenu.Item on:click={() => setMode('dark')}>Dark</DropdownMenu.Item>
						<DropdownMenu.Item on:click={() => resetMode()}>System</DropdownMenu.Item>
					</DropdownMenu.Content>
				</DropdownMenu.Root>
			</div>
		</div>
	</div>
</header>
