<script>
	import { onMount } from 'svelte';
	import WorkCard from '$lib/components/WorkCard.svelte';
	import PgTransSimple from '$lib/globals/PgTransSimple.svelte';
	import ProjectList from '$lib/components/ProjectList.svelte';
	import { caseStudies } from '$lib/data/caseStudies.js';

	let canHover;

	onMount(() => {
		canHover = window.matchMedia('(hover: hover)').matches;
	});
</script>

<PgTransSimple>
	<main class="relative w-full pt-32 md:pt-24 md:pl-18 pb-40">
		<section class="grid gap-y-12 px-4 md:px-16">
			<h1 class="text-6xl font-bold">Portfolio</h1>
			<div class="grid md:grid-cols-2 gap-x-6 gap-y-12">
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
		<section class="pt-24 px-2 md:px-8">
			<ProjectList />
		</section>
	</main>
</PgTransSimple>
