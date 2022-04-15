<script>
	import { projectList } from '$lib/data/allProjects';

	const gridText =
		'font-normal text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-gray-900 dark:text-gray-200';
</script>

<div
	class="grid-container grid w-full grid-cols-project-s gap-y-1 gap-x-8 slashed-zero tabular-nums md:grid-cols-project-l md:gap-y-4 md:gap-x-12"
>
	<h2
		class="col-span-1 mb-4 text-2xl font-medium text-gray-900 dark:text-gray-200 sm:text-3xl md:col-span-2 md:text-5xl xl:text-6xl"
	>
		All Projects
	</h2>
	<h2
		class="col-span-1 text-2xl font-medium text-gray-900 dark:text-gray-200 sm:text-3xl md:col-span-2 md:text-right md:text-5xl xl:text-6xl"
	>
		2018-22
	</h2>
	<h3 class="font-mono text-sm md:text-base">Index</h3>
	<h3 class="font-mono text-sm md:text-base">Client</h3>
	<h3 class="font-mono text-sm md:hidden md:text-base">Year</h3>
	<h3 class="font-mono text-sm md:text-base">Services</h3>
	<h3 class="hidden font-mono text-sm md:block md:text-base">Year</h3>
	<div class="col-span-full my-2 h-px bg-gray-800 opacity-20 dark:bg-gray-200 md:my-0" />
	{#each projectList as project, index}
		{#if index + 1 < 10}
			<h3 class={gridText}>0{index + 1}</h3>
		{:else}
			<h3 class={gridText}>{index + 1}</h3>
		{/if}
		<h3 class={gridText}>{project.client}</h3>
		<h3 class="md:hidden {gridText}">{project.year}</h3>
		<div class="flex">
			{#each project.service as service, index}
				<h3 class="{gridText} mr-2">{service}</h3>
				{#if project.service.length !== index + 1}
					<h3 class="{gridText} mr-2 opacity-30">/</h3>
				{/if}
			{/each}
		</div>
		<h3 class="hidden md:block {gridText}">{project.year}</h3>
		<div class="col-span-full my-2 h-px bg-gray-800 opacity-20 dark:bg-gray-200 md:my-0" />
	{/each}
</div>
