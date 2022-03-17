<script>
	import { projectList } from '$lib/data/allProjects';

	const gridText = 'text-xl sm:text-2xl lg:text-3xl xl:text-4xl';
</script>

<div
	class="grid-container grid grid-cols-project-s md:grid-cols-project-l gap-y-1 md:gap-y-4 gap-x-8 md:gap-x-12 w-full"
>
	<h2 class="col-span-1 md:col-span-2 text-2xl font-bold sm:text-3xl md:text-5xl xl:text-6xl mb-4">
		All Projects
	</h2>
	<h2
		class="col-span-1 md:col-span-2 text-2xl font-bold sm:text-3xl md:text-5xl xl:text-6xl md:text-right"
	>
		2018-22
	</h2>
	<h3 class="text-sm md:text-base">Indexxx</h3>
	<h3 class="text-sm md:text-base">Client</h3>
	<h3 class="md:hidden text-sm md:text-base">Year</h3>
	<h3 class="text-sm md:text-base">Services</h3>
	<h3 class="hidden md:block text-sm md:text-base">Year</h3>
	<div class="col-span-full h-px bg-gray-800 dark:bg-gray-200 opacity-20 my-2 md:my-0" />
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
		<div class="col-span-full h-px bg-gray-800 dark:bg-gray-200 opacity-20 my-2 md:my-0" />
	{/each}
</div>
