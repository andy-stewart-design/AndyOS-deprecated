<script>
	import { slide } from 'svelte/transition';

	export let isOpen = true;
	export let title = '';

	function toggleContent() {
		isOpen = !isOpen;
	}
</script>

<div
	class="overflow-hidden rounded-md border border-black border-opacity-10 shadow-xl backdrop-blur-sm dark:border-gray-100 dark:border-opacity-10"
>
	<article
		class="grid gap-y-1 bg-gray-300 bg-opacity-70 p-1 shadow-xl dark:bg-gray-900 dark:bg-opacity-70"
	>
		<div class="left flex items-center pl-1">
			<p
				class="flex-grow text-xs text-black text-opacity-50 dark:text-gray-100 dark:text-opacity-50"
			>
				{title}
			</p>
			<div
				class="flex h-6 w-6 cursor-pointer items-center justify-center rounded-md bg-gray-200 bg-opacity-0 transition-colors duration-300 hover:bg-black hover:bg-opacity-20 dark:bg-black dark:bg-opacity-0 dark:hover:bg-gray-200 dark:hover:bg-opacity-10"
				on:click={toggleContent}
			>
				<div class="h-px w-2 bg-black dark:bg-gray-300" />
			</div>
		</div>
		{#if isOpen}
			<div class="bg-gray-200 dark:bg-black" transition:slide|local>
				<slot />
			</div>
		{/if}
	</article>
</div>
