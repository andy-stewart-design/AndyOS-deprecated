<script>
	import { slide } from 'svelte/transition';

	export let isOpen = true;
	export let title = '';

	function toggleContent() {
		isOpen = !isOpen;
	}
</script>

<div
	class="backdrop-blur-sm border border-[#0d0d0e] border-opacity-10 dark:border-zinc-100 dark:border-opacity-10 rounded-md shadow-xl overflow-hidden"
>
	<article
		class="grid gap-y-1 bg-zinc-200 bg-opacity-70 dark:bg-[#1b1b1d] dark:bg-opacity-70 p-1 shadow-xl"
	>
		<div class="flex items-center pl-1 left">
			<p
				class="text-xs text-[#0d0d0e] text-opacity-50 dark:text-zinc-100 dark:text-opacity-50 flex-grow"
			>
				{title}
			</p>
			<div
				class="flex justify-center items-center w-6 h-6 bg-zinc-200 bg-opacity-50 dark:bg-[#0d0d0e] dark:bg-opacity-30 transition-colors duration-300 hover:bg-[#0d0d0e] hover:bg-opacity-10 dark:hover:bg-zinc-200 dark:hover:bg-opacity-10 rounded-md cursor-pointer"
				on:click={toggleContent}
			>
				<div class="w-2 h-px bg-[#0d0d0e] dark:bg-zinc-300" />
			</div>
		</div>
		{#if isOpen}
			<div class="bg-zinc-200 dark:bg-[#0d0d0e] p-8" transition:slide|local>
				<slot />
			</div>
		{/if}
	</article>
</div>
