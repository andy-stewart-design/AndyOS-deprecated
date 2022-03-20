<script>
	import PgTransSimple from '$lib/globals/PgTransSimple.svelte';
	import ScrollTrigger from '$lib/globals/ScrollTrigger.svelte';
	import ProjectIntro from '$lib/components/ProjectIntro.svelte';
	import MediaGrid from '$lib/components/MediaGrid.svelte';
	import { hero, intro, assets } from '$lib/data/wildtype';
</script>

<PgTransSimple>
	<main class="relative w-full md:pl-18 pb-40">
		<div
			class="sticky top-0 left-0 w-full h-18 border-b border-black border-opacity-20 dark:border-gray-100 dark:border-opacity-20 z-30 backdrop-blur-sm hidden md:block"
		>
			<div
				class="relative grid grid-cols-3 items-center bg-gray-200 dark:bg-black bg-opacity-20 dark:bg-opacity-20 w-full h-18"
			>
				<div class="flex items-center h-full px-6">
					<h3 class="text-lg"><span class="opacity-60">Client:</span> {intro.client}</h3>
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
		<img src={hero.image} class="w-full aspect-film object-cover" alt="kn" />
		<section class="px-4">
			<ProjectIntro content={intro} />
			<ScrollTrigger>
				<MediaGrid contents={assets} />
			</ScrollTrigger>
		</section>
	</main>
</PgTransSimple>
