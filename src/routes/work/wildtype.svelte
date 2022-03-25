<script>
	import PgTransSimple from '$lib/globals/PgTransSimple.svelte';
	import ScrollTrigger from '$lib/globals/ScrollTrigger.svelte';
	import ProjectSubnav from '$lib/components/ProjectSubnav.svelte';
	import ProjectIntro from '$lib/components/ProjectIntro.svelte';
	import MediaGrid from '$lib/components/MediaGrid.svelte';
	import { hero, intro, assets } from '$lib/data/wildtype';
</script>

<PgTransSimple>
	<main class="relative w-full md:pl-18 pb-40">
		<ProjectSubnav content={intro} />
		<div class="relative flex items-center w-full h-[calc(100vh-4.5rem)] p-6 bg-black">
			<img
				src={hero.image}
				class="absolute top-0 left-0 w-full h-full object-cover opacity-80"
				alt="kn"
			/>
			<h2 class="relative text-8xl font-bold text-center uppercase tracking-tight w-full">
				Seafood Without the Sea
			</h2>
		</div>
		<section class="px-4">
			<ProjectIntro content={intro} />
			<ScrollTrigger>
				<MediaGrid contents={assets} />
			</ScrollTrigger>
		</section>
	</main>
</PgTransSimple>
