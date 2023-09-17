<script lang="ts">
	export let image: string;
	export let alt: string;

	let xRotation: number;
	let yRotation: number;
	let zoom: boolean;

	function startRotate(e: MouseEvent) {
		zoom = true;
		let img = e.target as HTMLDivElement;
		xRotation = -13 * ((e.offsetY - img.clientWidth / 2) / img.clientHeight);
		yRotation = 13 * ((e.offsetX - img.clientHeight / 2) / img.clientWidth);
	}

	function stopRotate() {
		zoom = false;
		xRotation = 0;
		yRotation = 0;
	}
</script>

<div class="">
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		on:mousemove={startRotate}
		on:mouseleave={stopRotate}
		style:transform="perspective(800px) {zoom ? 'scale(1.1)' : ''} rotateX({xRotation}deg) rotateY({yRotation}deg)"
		class="duration-100 w-72 xl:w-80"
	>
		<img src={image} alt={alt} class="shadow-xl rounded-xl shadow-secondary/10" />
	</div>
</div>
