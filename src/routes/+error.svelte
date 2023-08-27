<script lang="ts">
	import type { IError } from '$lib/util/global.interface';
	import errors from '$lib/util/errors';
	import { page } from '$app/stores';

	$: status = $page.status;
	const randomIndex = Math.floor(Math.random() * errors.length);
	const errorMessage: IError = errors[randomIndex];
</script>

{#if errorMessage}
	<main class="flex flex-col items-center justify-center h-screen text-center">
		<span class="text-xl font-bold badge badge-primary badge-lg">{status}</span>
		<h1 class="mt-5 text-4xl font-bold font-rubik">{errorMessage.header}</h1>
		<p class="mt-2 text-xl">{errorMessage.message}</p>
        <p class="mt-2 text-xs">ID: #{errorMessage.id}</p>
        <a href="/" class="mt-10 btn btn-wide btn-secondary">Back to home</a>
	</main>
{/if}
