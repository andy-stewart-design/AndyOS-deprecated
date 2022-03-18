<script>
	import PgTransSimple from '$lib/globals/PgTransSimple.svelte';
	import ScrollTrigger from '$lib/globals/ScrollTrigger.svelte';
	import Image from '$lib/components/Image.svelte';
	import Video from '$lib/components/Video.svelte';
</script>

<PgTransSimple>
	<ScrollTrigger>
		<main class="relative w-full pt-32 md:pt-24 pb-40 md:pl-18">
			<section class="grid gap-y-6 auto-rows-min px-4 md:px-16 max-w-4xl mx-auto">
				<h1 class="text-4xl font-bold">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis repudiandae
					architecto molestiae et unde maiores.
				</h1>
				<Image src="/img/work/wildtype/wildtype-homepage.jpeg" />
				<Video
					src="https://player.vimeo.com/external/641529594.hd.mp4?s=098261326121d8b78a2e1ed27042eead40934e93&profile_id=175"
					autoplay={true}
				/>
				<p>
					Design works on the mind through the eyes. In the right context, with the right tone of
					voice, design has the ability to spark emotion, engage the imagination and even, at its
					best, inspire action.
				</p>
				<p>
					I'm Andy, a designer working at the intersection of brand and technology. I'm currently
					the Digital Creative Director at Turnstyle, a small creative studio on the north side of
					Seattle, where I help bring life to brands through strategic, thoughtful design.
				</p>
				<p>
					As a generalist both in training and disposition, my approach combines the craftsmanship
					of traditional graphic design practices with the dynamism of modern digital media. I have
					nearly a decade of experience in helping to realize even the most vague of ideas across a
					variety of touchpoints, from brand identities to digital experiences. My work is defined
					by my love for aesthetics, intuitive experiences, and solving challenging business
					problems.
				</p>
				<p>
					Design works on the mind through the eyes. In the right context, with the right tone of
					voice, design has the ability to spark emotion, engage the imagination and even, at its
					best, inspire action.
				</p>
				<p>
					I'm Andy, a designer working at the intersection of brand and technology. I'm currently
					the Digital Creative Director at Turnstyle, a small creative studio on the north side of
					Seattle, where I help bring life to brands through strategic, thoughtful design.
				</p>
				<p>
					As a generalist both in training and disposition, my approach combines the craftsmanship
					of traditional graphic design practices with the dynamism of modern digital media. I have
					nearly a decade of experience in helping to realize even the most vague of ideas across a
					variety of touchpoints, from brand identities to digital experiences. My work is defined
					by my love for aesthetics, intuitive experiences, and solving challenging business
					problems.
				</p>
				<Image src="/img/work/wildtype/wildtype-homepage.jpeg" lazy={true} />
				<Video
					src="https://player.vimeo.com/external/641529594.hd.mp4?s=098261326121d8b78a2e1ed27042eead40934e93&profile_id=175"
					autoplay={true}
					lazy={true}
				/>
				<p>
					As a generalist both in training and disposition, my approach combines the craftsmanship
					of traditional graphic design practices with the dynamism of modern digital media. I have
					nearly a decade of experience in helping to realize even the most vague of ideas across a
					variety of touchpoints, from brand identities to digital experiences. My work is defined
					by my love for aesthetics, intuitive experiences, and solving challenging business
					problems.
				</p>
				<p>
					Design works on the mind through the eyes. In the right context, with the right tone of
					voice, design has the ability to spark emotion, engage the imagination and even, at its
					best, inspire action.
				</p>
			</section>
		</main>
	</ScrollTrigger>
</PgTransSimple>
