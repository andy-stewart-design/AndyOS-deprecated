<script>
	import PgTransSimple from '$lib/globals/PgTransSimple.svelte';
	import ScrollTrigger from '$lib/globals/ScrollTrigger.svelte';
	import Image from '$lib/components/Image.svelte';
	import Video from '$lib/components/Video.svelte';
</script>

<PgTransSimple>
	<ScrollTrigger>
		<div class="relative w-full pt-32 md:pt-24 md:pl-18 pb-40">
			<section class="relative grid grid-cols-2 gap-12 px-4 md:px-16">
				<h1 class="text-5xl leading-tight font-bold col-span-2">
					I create warm, smart brands and clear interfaces for companies who are ready to reimagine.
				</h1>

				<div class="grid gap-6 auto-rows-min">
					<h1 class="font-bold text-sm uppercase tracking-widest">About Andy</h1>
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
					<div class="grid gap-2 auto-rows-min">
						<p class="text-xl">Listening to</p>
						<p class="text-xl">Instagram</p>
						<p class="text-xl">Twitter</p>
						<p class="text-xl">Linkedin</p>
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
