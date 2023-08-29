<script lang="ts">
	export let link: string;
</script>

<a href={link}
	class="rounded-lg mx-auto bg-transparent hover:bg-gradient-to-r p-[2px] from-primary to-secondary duration-500 hover:shadow-xl hover:-translate-y-1"
>
	<div class="flex flex-col justify-between h-full p-4 rounded-md bg-base-200">
		<slot />
	</div>
</a>
