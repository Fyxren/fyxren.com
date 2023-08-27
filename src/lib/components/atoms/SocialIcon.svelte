<script lang="ts">
	export let link: string;
</script>

<a
	href={link}
	class="p-3 duration-500 border-2 border-transparent bg-base-200 rounded-xl hover:border-base-300 hover:shadow-xl hover:-translate-y-1"
>
	<slot />
</a>
