<script>
	import { onMount } from 'svelte';
	import PgTransSimple from '$lib/globals/PgTransSimple.svelte';
	import ScrollTrigger from '$lib/globals/ScrollTrigger.svelte';
	// import Image from '$lib/components/Image.svelte';

	let loaded = false;

	onMount(() => {
		setTimeout(() => {
			loaded = true;
		}, 400);
	});
</script>

<PgTransSimple>
	<ScrollTrigger>
		<div class="relative w-full md:pl-18">
			<section
				class="flex flex-col justify-between items-center gap-y-8 h-[80vh] pt-32 md:pt-14 px-4 md:px-8 pb-16"
			>
				<h1
					class="text-6xl sm:text-8xl lg:text-9xl font-bold text-center uppercase leading-none tracking-tight"
				>
					About Andy
				</h1>
				<div class="grow bg-black dark:bg-gray-200 h-full w-px opacity-30" />
				<p class="font-mono text-center">Digital Creative Director</p>
			</section>
			<section
				class="relative grid lg:grid-cols-2 gap-12 py-24 pb-40 px-4 md:px-8 xl:px-16 2xl:px-24 translate-y-1/3 opacity-0 transition-ot duration-1000 border-t border-black border-opacity-20 dark:border-gray-200 dark:border-opacity-20"
				class:loaded
			>
				<div class="grid gap-6 auto-rows-min">
					<!-- <h1 class="font-mono">About Andy</h1> -->
					<p class="text-xl">
						I believe that design works on the mind through the eyes. In the right context, with the
						right tone of voice, design has the ability to spark emotion, engage the imagination and
						even, at its best, inspire action.
					</p>
					<p class="text-xl">
						I'm Andy, a designer working at the intersection of brand and technology. I'm currently
						the Digital Creative Director at <a href="https://turnstyle.studio/">Turnstyle</a>, a
						small creative studio on the north side of Seattle, where I help bring life to brands
						through strategic, thoughtful design.
					</p>
					<p class="text-xl">
						As a generalist both in training and disposition, my approach combines the craftsmanship
						of traditional graphic design practices with the dynamism of modern digital media. I
						have nearly a decade of experience in helping to realize even the most vague of ideas
						across a variety of touchpoints, from brand identities to digital experiences. My work
						is defined by my love for aesthetics, intuitive experiences, and solving challenging
						business problems.
					</p>
					<div class="flex flex-col items-start gap-y-2">
						<h3 class="font-mono">Details</h3>
						<a
							class="row-auto font-medium text-2xl hover:text-blue dark:hover:text-neon transition-colors duration-300"
							href="https://twitter.com/madebyandy"
							rel="external"
							target="_blank">Twitter ↗</a
						>
						<a
							class="row-auto font-medium text-2xl hover:text-blue dark:hover:text-neon transition-colors duration-300"
							href="https://github.com/andy-stewart-design"
							rel="external"
							target="_blank">Github ↗</a
						>
						<a
							class="row-auto font-medium text-2xl hover:text-blue dark:hover:text-neon transition-colors duration-300"
							href="https://codepen.io/andyandyandyoh"
							rel="external"
							target="_blank">Codepen ↗</a
						>
						<p class="font-medium text-2xl opacity-30">Playlist</p>
						<p class="font-medium text-2xl opacity-30">Uses</p>
					</div>
				</div>
				<img
					class="rounded-2xl aspect-square"
					src="/img/misc/andy-stewart-about-portrait.jpeg"
					alt="Portrait of Andy Stewart"
				/>
			</section>
		</div>
	</ScrollTrigger>
</PgTransSimple>

<style>
	.loaded {
		@apply translate-y-0 opacity-100;
	}
</style>
