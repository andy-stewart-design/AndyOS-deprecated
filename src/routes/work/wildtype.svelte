<script>
	import PgTransSimple from '$lib/globals/PgTransSimple.svelte';
	import ScrollTrigger from '$lib/globals/ScrollTrigger.svelte';
	import ProjectIntro from '$lib/components/ProjectIntro.svelte';
	import MediaGrid from '$lib/components/MediaGrid.svelte';
	import { intro, assets } from '$lib/data/wildtype';
</script>

<PgTransSimple>
	<main class="relative w-full pt-32 md:pt-24 md:pl-18 pb-40">
		<section class="px-4">
			<ProjectIntro content={intro} />
			<ScrollTrigger>
				<MediaGrid contents={assets} />
			</ScrollTrigger>
		</section>
	</main>
</PgTransSimple>
