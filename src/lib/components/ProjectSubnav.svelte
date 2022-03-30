<script>
	export let content;
</script>

<div
	class="sticky top-0 left-0 w-full h-18 border-b border-black border-opacity-20 dark:border-gray-100 dark:border-opacity-20 z-30 backdrop-blur-sm hidden md:block"
>
	<div
		class="font-mono relative grid grid-cols-3 items-center bg-gray-200 dark:bg-black bg-opacity-20 dark:bg-opacity-20 w-full h-18"
	>
		<div class="flex items-center h-full px-6">
			<h3 class="text-lg"><span class="opacity-60">Client:</span> {content.client}</h3>
		</div>
		<div
			class="flex items-center h-full border-l border-black border-opacity-20 dark:border-gray-100 dark:border-opacity-20 px-6"
		>
			<h3 class="text-lg"><span class="opacity-60">Type:</span> Web</h3>
		</div>
		<div
			class="flex items-center h-full border-l border-black border-opacity-20 dark:border-gray-100 dark:border-opacity-20 px-6"
		>
			<h3 class="text-lg"><span class="opacity-60">Year:</span> 2021</h3>
		</div>
	</div>
</div>
