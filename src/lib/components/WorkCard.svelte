<script>
	import { onMount } from 'svelte';

	export let canHover = false;
	export let client = 'Wildtype';
	export let category = 'Web';
	export let year = '2021';
	export let imgSrc = '/img/work/index/wildtype-featured.jpeg';
	export let vidSrc = '/img/work/index/wildtype-browser.mp4';
	export let href = '/work/wildtype';
	export let alt = 'image alt text';

	let isLoaded = true;
	let paused = true;
	const enter = () => (paused = false);
	const leave = () => (paused = true);

	onMount(() => (isLoaded = true));
</script>

<div>
	<a class="group mb-12" {href} on:mouseenter={enter} on:mouseleave={leave} sveltekit:noscroll>
		<div class="relative w-full rounded-2xl overflow-hidden mb-4 bg-black transition-fix">
			{#if isLoaded}
				<div class="w-full transform scale-110 ">
					<div class="relative w-full transition-opacity duration-300 group-hover:opacity-75">
						<img class="relative w-full aspect-square object-cover" src={imgSrc} {alt} />
						{#if canHover}
							<div
								class="absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
							>
								<!-- <img class="w-full h-full object-cover blur-lg" src={imgSrc} {alt} /> -->
								<div
									class="w-full h-full bg-center bg-cover blur-lg"
									style="background-image: url('{imgSrc}');"
								/>
							</div>
						{/if}
					</div>
				</div>
				{#if canHover}
					<video
						class="absolute top-1/2 left-1/2 w-3/4 transform -translate-y-1/2 -translate-x-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-lg"
						src={vidSrc}
						bind:paused
						loop
						muted
						alt="kjn"
					>
						<track kind="captions" />
					</video>
				{/if}
			{/if}
		</div>
	</a>
	<div class="flex">
		<h3 class="grow text-xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl uppercase">
			{client}
		</h3>
		<h4 class="grow text-xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl uppercase opacity-40">
			{category} <span class="sup tracking-tight">{year}</span>
		</h4>
	</div>
</div>

<style>
	.sup {
		font-feature-settings: 'sups';
		font-weight: lighter;
	}

	.transition-fix {
		-webkit-backface-visibility: hidden;
		-moz-backface-visibility: hidden;
		-webkit-transform: translate3d(0, 0, 0);
		-moz-transform: translate3d(0, 0, 0);
	}
</style>
