<script>
	import { onMount } from 'svelte';
	import WorkCard from '$lib/components/WorkCard.svelte';
	import PgTransSimple from '$lib/globals/PgTransSimple.svelte';
	import ProjectList from '$lib/components/Projects/ProjectList.svelte';
	import { caseStudies } from '$lib/data/caseStudies.js';

	let canHover;
	let loaded = false;

	onMount(() => {
		canHover = window.matchMedia('(hover: hover)').matches;
		setTimeout(() => {
			loaded = true;
		}, 400);
	});
</script>

<PgTransSimple>
	<main class="relative w-full md:pl-[73px]">
		<section
			class="flex flex-col justify-between items-center gap-y-8 h-[80vh] pt-32 md:pt-14 px-4 md:px-8 pb-16"
		>
			<h1
				class="text-6xl sm:text-8xl lg:text-9xl font-black text-center uppercase leading-none tracking-tight"
			>
				Portfolio
			</h1>
			<div class="grow bg-black dark:bg-gray-200 h-full w-px opacity-30" />
			<p class="font-mono text-center">A collection of pretty pixels</p>
		</section>
		<section
			class="py-24 px-4 md:px-8 xl:px-16 2xl:px-24 translate-y-[30vh] opacity-0 transition-ot ease-out-cubic duration-1000 border-t border-black border-opacity-20 dark:border-gray-200 dark:border-opacity-20"
			class:loaded
		>
			<div class="grid md:grid-cols-2 gap-x-8 gap-y-6 md:gap-y-12">
				{#each caseStudies as caseStudy}
					<WorkCard
						{canHover}
						client={caseStudy.client}
						category={caseStudy.category}
						year={caseStudy.year}
						imgSrc={caseStudy.imgSrc}
						vidSrc={caseStudy.vidSrc}
						href={caseStudy.href}
						alt={caseStudy.alt}
					/>
				{/each}
			</div>
		</section>
		<section
			class="pt-24 pb-40 px-4 md:px-8 xl:px-16 2xl:px-24 border-t border-black border-opacity-20 dark:border-gray-200 dark:border-opacity-20"
		>
			<ProjectList />
		</section>
	</main>
</PgTransSimple>

<style>
	.loaded {
		@apply translate-y-0 opacity-100;
	}
</style>
