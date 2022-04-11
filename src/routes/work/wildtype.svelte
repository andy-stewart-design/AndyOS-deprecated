<script>
	import PgTransSimple from '$lib/globals/PgTransSimple.svelte';
	import ScrollTrigger from '$lib/globals/ScrollTrigger.svelte';
	import ProjectSubnav from '$lib/components/Projects/ProjectSubnav.svelte';
	import ProjectHero from '$lib/components/Projects/ProjectHero.svelte';
	import ProjectIntro from '$lib/components/Projects/ProjectIntro.svelte';
	import MediaGrid from '$lib/components/MediaGrid.svelte';
	import { hero, intro, assets } from '$lib/data/wildtype';
</script>

<PgTransSimple>
	<main class="relative w-full md:pl-[73px] pb-40 bg-gray-200 dark:bg-black">
		<ProjectSubnav content={intro} />
		<ProjectHero content={hero} />
		<section class="px-4 md:px-8 xl:px-16 2xl:px-24">
			<ProjectIntro content={intro} />
			<ScrollTrigger>
				<MediaGrid contents={assets} />
			</ScrollTrigger>
		</section>
	</main>
</PgTransSimple>
