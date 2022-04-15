<script>
	import PgTransSimple from '$lib/globals/PgTransSimple.svelte';
	import ScrollTrigger from '$lib/globals/ScrollTrigger.svelte';
	import ProjectSubnav from '$lib/components/Projects/ProjectSubnav.svelte';
	import ProjectHero from '$lib/components/Projects/ProjectHero.svelte';
	import ProjectIntro from '$lib/components/Projects/ProjectIntro.svelte';
	import MediaGrid from '$lib/components/MediaGrid.svelte';
	import { hero, intro, assets } from '$lib/data/wildtype';
	import Footer from '$lib/globals/Footer.svelte';
</script>

<PgTransSimple>
	<main class="relative w-full bg-gray-200 dark:bg-black md:pl-[73px]">
		<ProjectSubnav content={intro} />
		<ProjectHero content={hero} />
		<section class="px-4 pb-24 md:px-8 xl:px-16 2xl:px-24">
			<ProjectIntro content={intro} />
		</section>
		<!-- <section class="px-4 pb-24 md:px-8 xl:px-16 2xl:px-24"> -->
		<section class="pb-24">
			<ScrollTrigger>
				<MediaGrid contents={assets} />
			</ScrollTrigger>
		</section>
		<Footer />
	</main>
</PgTransSimple>
