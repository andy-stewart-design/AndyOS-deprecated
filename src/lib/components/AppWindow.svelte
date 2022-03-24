<script>
	import { slide } from 'svelte/transition';

	export let isOpen = true;
	export let title = '';

	function toggleContent() {
		isOpen = !isOpen;
	}
</script>

<div
	class="backdrop-blur-sm border border-black border-opacity-10 dark:border-gray-100 dark:border-opacity-10 rounded-md shadow-xl overflow-hidden"
>
	<article
		class="grid gap-y-1 bg-gray-200 bg-opacity-70 dark:bg-gray-900 dark:bg-opacity-70 p-1 shadow-xl"
	>
		<div class="flex items-center pl-1 left">
			<p
				class="text-xs text-black text-opacity-50 dark:text-gray-100 dark:text-opacity-50 flex-grow"
			>
				{title}
			</p>
			<div
				class="flex justify-center items-center w-6 h-6 bg-gray-200 bg-opacity-50 dark:bg-black dark:bg-opacity-30 transition-colors duration-300 hover:bg-black hover:bg-opacity-10 dark:hover:bg-gray-200 dark:hover:bg-opacity-10 rounded-md cursor-pointer"
				on:click={toggleContent}
			>
				<div class="w-2 h-px bg-black dark:bg-gray-300" />
			</div>
		</div>
		{#if isOpen}
			<div class="bg-gray-200 dark:bg-black" transition:slide|local>
				<slot />
			</div>
		{/if}
	</article>
</div>
