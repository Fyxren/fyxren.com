<script lang="ts">
	let scale = 1;
	let x: number;
	let y: number;

	function move(e: MouseEvent) {
		x = e.clientX;
		y = e.clientY;
	}
</script>

<svelte:window
	on:mousemove={move}
	on:mousedown={() => (scale = 0.75)}
	on:mouseup={() => (scale = 1)}
	on:mouseleave={() => (scale = 1)}
/>

<div
	class="fixed top-0 left-0 z-50 w-10 h-10 border-2 border-primary-500/50 pointer-events-none transition-all ease-cursor rounded-full"
	style="transform: translate({x - 20}px, {y - 20}px) scale({scale});"
/>
