<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { Sun, Moon } from 'lucide-svelte';

	import { setMode, resetMode } from 'mode-watcher';
</script>

<header
	class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
	<div class="container flex items-center justify-between h-14 max-w-screen-2xl">
		<div class="flex mr-4">
			<a href="/" class="flex items-center mr-6 space-x-2">
				<img src="/logo.svg" alt="logo" class="object-contain h-6 dark:invert-0 invert" />
				<span class="hidden font-bold sm:inline-block">Fyxren</span></a
			>
			<nav class="flex items-center gap-6 text-sm">
				<a href="/" class="transition-colors hover:text-foreground/80 text-foreground/60">Home</a>
				<a href="/graveyard" class="transition-colors hover:text-foreground/80 text-foreground/60"
					>Graveyard</a
				>
			</nav>
		</div>
		<div class="flex items-center space-x-2 md:justify-end">
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
</header>
