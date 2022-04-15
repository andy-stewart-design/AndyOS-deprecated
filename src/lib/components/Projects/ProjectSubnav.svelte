<script>
	export let content;
</script>

<div
	class="sticky top-0 left-0 z-30 hidden h-18 w-full border-b border-black border-opacity-20 backdrop-blur-md dark:border-gray-100 dark:border-opacity-20 md:block"
>
	<div
		class="relative grid h-18 w-full grid-cols-3 items-center bg-gray-200 bg-opacity-20 font-mono dark:bg-black dark:bg-opacity-20"
	>
		<div class="flex h-full items-center px-6">
			<h3 class="text-lg text-gray-900 dark:text-gray-200">
				<span class="opacity-50">Client:</span>
				{content.client}
			</h3>
		</div>
		<div
			class="flex h-full items-center border-l border-black border-opacity-20 px-6 dark:border-gray-100 dark:border-opacity-20"
		>
			<h3 class="text-lg text-gray-900 dark:text-gray-200">
				<span class="opacity-50">Type:</span> Web
			</h3>
		</div>
		<div
			class="flex h-full items-center border-l border-black border-opacity-20 px-6 dark:border-gray-100 dark:border-opacity-20"
		>
			<h3 class="text-lg text-gray-900 dark:text-gray-200">
				<span class="opacity-50">Year:</span> 2021
			</h3>
		</div>
	</div>
</div>
