<script>
	import { onMount } from 'svelte';
	import PgTransSimple from '$lib/globals/PgTransSimple.svelte';
	import Accordion from '$lib/components/Accordion.svelte';

	const links = [
		{ text: 'Twitter', url: 'https://twitter.com/madebyandy', ext: true },
		{ text: 'Github', url: 'https://github.com/andy-stewart-design', ext: true },
		{ text: 'Codepen', url: 'https://codepen.io/andyandyandyoh', ext: true },
		{ text: 'Playlist', url: '#' },
		{ text: 'Uses', url: '#' }
	];

	let open = false;

	let loaded = false;

	onMount(() => {
		setTimeout(() => {
			loaded = true;
		}, 400);
	});
</script>

<PgTransSimple>
	<div class="relative w-full md:pl-18">
		<section
			class="flex h-[80vh] flex-col items-center justify-between gap-y-8 px-4 pt-32 pb-16 md:px-8 md:pt-14"
		>
			<h1
				class="text-center text-6xl font-black uppercase leading-none tracking-tight sm:text-8xl lg:text-9xl"
			>
				About Andy
			</h1>
			<div class="h-full w-px grow bg-black opacity-30 dark:bg-gray-200" />
			<p class="text-center font-mono">Digital Creative Director</p>
		</section>
		<main
			class="relative translate-y-[25vh] opacity-0 transition-ot duration-1000 ease-out-cubic"
			class:loaded
		>
			<section
				class="relative grid gap-12 border-t border-black border-opacity-20 py-24 px-4 pb-40 dark:border-gray-200 dark:border-opacity-20 md:px-8 lg:grid-cols-2 xl:px-16 2xl:px-24"
			>
				<div class="grid auto-rows-min gap-6">
					<p class="font-book text-xl">
						I believe that design works on the mind through the eyes. In the right context, with the
						right tone of voice, design has the ability to spark emotion, engage the imagination and
						even, at its best, inspire action.
					</p>
					<p class="font-book text-xl">
						I'm Andy, a designer working at the intersection of brand and technology. I'm currently
						the Digital Creative Director at <a href="https://turnstyle.studio/">Turnstyle</a>, a
						small creative studio on the north side of Seattle, where I help bring life to brands
						through strategic, thoughtful design.
					</p>
					<p class="font-book text-xl">
						As a generalist both in training and disposition, my approach combines the craftsmanship
						of traditional graphic design practices with the dynamism of modern digital media. I
						have nearly a decade of experience in helping to realize even the most vague of ideas
						across a variety of touchpoints, from brand identities to digital experiences. My work
						is defined by my love for aesthetics, intuitive experiences, and solving challenging
						business problems.
					</p>
					<div class="flex flex-col items-start gap-y-2">
						<h3 class="font-mono">Details</h3>
						{#each links as link}
							{#if link.ext}
								<a
									class="row-auto text-2xl font-semibold transition-colors duration-300 hover:text-blue dark:hover:text-neon"
									href={link.url}
									rel="external"
									target="_blank">{link.text} <span class="font-light">↗</span></a
								>
							{:else}
								<a
									class="row-auto text-2xl font-semibold transition-colors duration-300 hover:text-blue dark:hover:text-neon"
									class:disabled={link.url === '#'}
									href={link.url}>{link.text}</a
								>
							{/if}
						{/each}
					</div>
				</div>
				<img
					class="aspect-square rounded-2xl object-cover lg:aspect-[2/3] 2xl:aspect-[4/5] 3xl:aspect-square"
					src="/img/misc/andy-stewart-about-portrait.jpeg"
					alt="Portrait of Andy Stewart"
				/>
			</section>
			<section
				class="relative grid gap-y-4 border-t border-black border-opacity-20 py-24 px-4 pb-40 dark:border-gray-200 dark:border-opacity-20 md:px-8 xl:px-16 2xl:px-24"
			>
				<h2 class="font-mono">What I Do</h2>
				<div class="col-span-full my-2 h-px bg-gray-800 opacity-20 dark:bg-gray-200 md:my-0" />
				<Accordion title="Strategy">
					<div class="grid grid-cols-3 gap-x-8 pt-4">
						<div>
							<h4 class="mb-4 text-2xl  font-medium">Alignment</h4>
							<p>
								Successful projects require a shared understanding of goals and objectives. Building
								the case for change and maintaining an inclusive, open process are essential to
								finding the right solution.
							</p>
						</div>
						<div>
							<h4 class="mb-4 text-2xl  font-medium">Narrative</h4>
							<p>
								People don't respond to strategy—they respond to stories. Putting the right words in
								the right order, with the right context, pacing and emotion, is the difference
								between indifference and engagement.
							</p>
						</div>
						<div>
							<h4 class="mb-4 text-2xl  font-medium">User Experience</h4>
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam in laudantium
								atque praesentium laboriosam hic quasi eveniet minima temporibus repellat accusamus
								explicabo blanditiis nobis.
							</p>
						</div>
					</div>
				</Accordion>
				<Accordion title="Design">
					<div class="grid grid-cols-3 gap-x-8 pt-4">
						<div>
							<h4 class="mb-4 text-2xl  font-medium">Alignment</h4>
							<p>
								Successful projects require a shared understanding of goals and objectives. Building
								the case for change and maintaining an inclusive, open process are essential to
								finding the right solution.
							</p>
						</div>
						<div>
							<h4 class="mb-4 text-2xl  font-medium">Narrative</h4>
							<p>
								People don't respond to strategy—they respond to stories. Putting the right words in
								the right order, with the right context, pacing and emotion, is the difference
								between indifference and engagement.
							</p>
						</div>
						<div>
							<h4 class="mb-4 text-2xl  font-medium">User Experience</h4>
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam in laudantium
								atque praesentium laboriosam hic quasi eveniet minima temporibus repellat accusamus
								explicabo blanditiis nobis.
							</p>
						</div>
					</div>
				</Accordion>
				<Accordion title="Technology">
					<div class="grid grid-cols-3 gap-x-8 pt-4">
						<div>
							<h4 class="mb-4 text-2xl font-medium">Front End Development</h4>
							<p>
								Memorable digital experiences live at the intersection of design and technology.
								Atque praesentium laboriosam hic quasi eveniet minima temporibus repellat accusamus
								explicabo blanditiis nobis.
							</p>
						</div>
						<div>
							<h4 class="mb-4 text-2xl font-medium">Quality Assurance</h4>
							<p>
								It's not enough to make nice things—you have to be willing to break them. I want to
								be able stand by the quality of my products, so I test things myself before they
								ship.
							</p>
						</div>
						<div>
							<h4 class="mb-4 text-2xl font-medium">Generative Design</h4>
							<p>
								Computational aesthetics sit, amet consectetur adipisicing elit. Numquam in
								laudantium atque praesentium laboriosam hic quasi eveniet minima temporibus repellat
								accusamus explicabo blanditiis nobis.
							</p>
						</div>
					</div>
				</Accordion>
			</section>
		</main>
	</div>
</PgTransSimple>

<style>
	.loaded {
		@apply translate-y-0 opacity-100;
	}
	.disabled {
		@apply pointer-events-none opacity-40;
	}
</style>
