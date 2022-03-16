<script>
	import { onMount } from 'svelte';
	// Props for marquee content and anmation duration
	export let contents = 'Content —';
	export let gap = 'pr-4';
	export let width = 'w-screen';
	let duration = 16;
	// Default number of instances of the marquee content to create
	let repeat = 6;
	onMount(() => {
		// get width of container and marquee els
		// @ts-ignore
		let contentWidth = document.querySelector('.marquee-content').offsetWidth;
		// @ts-ignore
		let containerWidth = document.querySelector('.marquee-container').offsetWidth;
		// determine the number of marquee els that will fit in the screen
		let num = Math.ceil(containerWidth / contentWidth);
		// set the repeat value based on the computed value above
		containerWidth < 800 ? (repeat = num * 2 + 1) : (repeat = Math.ceil(num * 1.5 + 1));
		num < 4 ? (duration = 12) : (duration = 6);
	});
</script>

<div class="marquee-container {width}" style="overflow: hidden;">
	<div class="flex flex-row">
		{#each Array(repeat) as _, i}
			<div class="marquee-content animate-marquee {gap}" style="animation-duration: {duration}s">
				<h1 class="whitespace-nowrap">{contents}</h1>
			</div>
		{/each}
	</div>
</div>
