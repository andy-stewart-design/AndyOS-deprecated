<script>
	import { onMount } from 'svelte';
	import ComingSoon from '$lib/icons/ComingSoon.svelte';

	export let canHover = false;
	export let client, category, year, imgSrc, vidSrc, href, alt;

	let isLoaded = true;
	let paused = true;
	const enter = () => (paused = false);
	const leave = () => (paused = true);

	onMount(() => (isLoaded = true));
</script>

<div class="group">
	<a
		class="mb-12"
		class:pointer-events-none={!vidSrc}
		{href}
		on:mouseenter={enter}
		on:mouseleave={leave}
		sveltekit:noscroll
		sveltekit:prefetch
	>
		<div class="relative w-full rounded-3xl overflow-hidden mb-4 bg-black transition-fix">
			{#if isLoaded}
				<div class="relative w-full transform scale-110 ">
					<div class="relative w-full transition-opacity duration-300 group-hover:opacity-75">
						<img class="relative w-full aspect-square object-cover" src={imgSrc} {alt} />
						{#if canHover}
							<div
								class="absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
							>
								<div
									class="w-full h-full bg-center bg-cover blur-lg"
									style="background-image: url('{imgSrc}');"
								/>
							</div>
						{/if}
					</div>
				</div>
				{#if canHover && vidSrc}
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
				{:else if canHover}
					<div
						class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 w-1/2 max-w-[256px] text-gray-200"
					>
						<div class="animate-rotate" style="animation-duration: 20s">
							<ComingSoon />
						</div>
					</div>
				{/if}
				{#if !vidSrc}
					<div
						class="absolute top-4 left-4 font-medium text-black bg-white bg-opacity-75 py-0.5 px-3 rounded-full border border-black border-opacity-20"
					>
						<p>Coming Soon</p>
					</div>
				{/if}
			{/if}
		</div>
	</a>
	<div class="grid grid-cols-2">
		<h3 class="text-3xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl">
			{client}
		</h3>
		<div>
			<h4 class="text-3xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl pb-1 opacity-40">
				{category}
			</h4>
			<h4 class="sups text-3xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl opacity-40">
				{year}
			</h4>
		</div>
	</div>
</div>

<style>
	.sups {
		font-feature-settings: 'sups', 'zero';
	}
	.transition-fix {
		-webkit-backface-visibility: hidden;
		-moz-backface-visibility: hidden;
		-webkit-transform: translate3d(0, 0, 0);
		-moz-transform: translate3d(0, 0, 0);
	}
</style>
