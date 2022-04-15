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
		class:pointer-events-none={!vidSrc}
		{href}
		on:mouseenter={enter}
		on:mouseleave={leave}
		sveltekit:noscroll
		sveltekit:prefetch
	>
		<div class="transition-fix relative mb-6 w-full overflow-hidden rounded-3xl bg-black">
			{#if isLoaded}
				<div class="relative w-full scale-110 transform ">
					<div class="relative w-full transition-opacity duration-300 group-hover:opacity-75">
						<img class="relative aspect-square w-full object-cover" src={imgSrc} {alt} />
						{#if canHover}
							<div
								class="absolute top-0 left-0 h-full w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
							>
								<div
									class="h-full w-full bg-cover bg-center blur-lg"
									style="background-image: url('{imgSrc}');"
								/>
							</div>
						{/if}
					</div>
				</div>
				{#if canHover && vidSrc}
					<video
						class="absolute top-1/2 left-1/2 w-3/4 -translate-y-1/2 -translate-x-1/2 transform rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"
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
						class="absolute top-4 left-4 rounded-full border border-gray-200 border-opacity-20 bg-black bg-opacity-75 py-0.5 px-3 pt-px text-white"
					>
						<p class="font-medium tracking-wide">Coming Soon</p>
					</div>
				{/if}
			{/if}
		</div>
	</a>
	<div
		class="grid grid-cols-2 transition-colors duration-300 group-hover:text-blue dark:group-hover:text-neon"
	>
		<div>
			<h3
				class="pb-1 text-3xl font-medium leading-tightest text-gray-900 transition-colors duration-300 group-hover:text-blue dark:text-gray-200 dark:group-hover:text-neon sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl"
			>
				{client}
			</h3>
			<h4
				class="sups text-3xl font-normal leading-tighter sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl"
			>
				{year}
			</h4>
		</div>
		<div class="flex gap-x-2">
			{#each category as item, index}
				<h4
					class="text-3xl font-normal leading-tightest sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl"
				>
					{item}
				</h4>
				{#if index < category.length - 1}
					<h4
						class="text-3xl font-normal leading-tightest opacity-30 sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl"
					>
						/
					</h4>
				{/if}
			{/each}
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
