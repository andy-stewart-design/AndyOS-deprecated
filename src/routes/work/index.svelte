<script>
	import { onMount } from 'svelte';
	import WorkCard from '$lib/components/WorkCard.svelte';
	import PgTransSimple from '$lib/globals/PgTransSimple.svelte';
	import ProjectList from '$lib/components/Projects/ProjectList.svelte';
	import Footer from '$lib/globals/Footer.svelte';
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
			class="flex h-[80vh] flex-col items-center justify-between gap-y-8 px-4 pt-32 pb-16 md:px-8 md:pt-14"
		>
			<h1
				class="text-center text-6xl font-black uppercase leading-none tracking-tight text-gray-900 dark:text-gray-200 sm:text-8xl lg:text-9xl xl:text-[160px]"
			>
				Portfolio
			</h1>
			<div class="h-full w-px grow bg-black opacity-30 dark:bg-gray-200" />
			<p class="text-center font-mono">A collection of pretty pixels</p>
		</section>
		<section
			class="translate-y-[30vh] border-t border-black border-opacity-20 py-24 px-4 opacity-0 transition-ot duration-1000 ease-out-cubic dark:border-gray-200 dark:border-opacity-20 md:px-8 xl:px-16 2xl:px-24"
			class:loaded
		>
			<div class="grid gap-x-8 gap-y-6 md:grid-cols-2 md:gap-y-12">
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
			class="border-t border-black border-opacity-20 px-4 py-24 dark:border-gray-200 dark:border-opacity-20 md:px-8 xl:px-16 2xl:px-24"
		>
			<ProjectList />
		</section>
		<Footer />
	</main>
</PgTransSimple>

<style>
	.loaded {
		@apply translate-y-0 opacity-100;
	}
</style>
