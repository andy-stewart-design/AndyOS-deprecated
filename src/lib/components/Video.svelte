<script>
	import { fade } from 'svelte/transition';
	// available aspect ratios: 16:9 (video), 2:3 (film), 5:4 (common), 1:1 (Square)
	export let ratio = 'aspect-video';
	export let lazy = false;
	export let src = '';
	export let autoplay = false;
	export let loop = true;
	export let muted = true;

	let video;
	let paused = true;
	let poster;
	if (ratio === 'aspect-square') {
		poster = '/img/misc/placeholder-square.svg';
	} else if (ratio === 'aspect-film') {
		poster = '/img/misc/placeholder-film.svg';
	} else if (ratio === 'aspect-common') {
		poster = '/img/misc/placeholder-common.svg';
	} else {
		poster = '/img/misc/placeholder-video.svg';
	}
</script>

<div class="relative w-full bg-black bg-opacity-25 overflow-hidden">
	<video
		bind:this={video}
		class="transition-all origin-center duration-1000 ease-out-cubic w-full object-cover {ratio}"
		class:lazy-media={lazy}
		{autoplay}
		{loop}
		{muted}
		{src}
		on:click={() => {
			video.pause();
		}}
		bind:paused
		{poster}
	>
		<track kind="captions" />
		Sorry, your browser doesn't support embedded videos.
	</video>
	{#if paused}
		<div
			class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center w-40 h-40 rounded-full border-2 border-zinc-200 text-zinc-200"
			on:click={() => {
				video.play();
			}}
			transition:fade={{ duration: 100 }}
		>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64"
				><path fill="none" d="M0 0h24v24H0z" /><path
					d="M19.376 12.416L8.777 19.482A.5.5 0 0 1 8 19.066V4.934a.5.5 0 0 1 .777-.416l10.599 7.066a.5.5 0 0 1 0 .832z"
					fill="currentColor"
				/></svg
			>
		</div>
	{/if}
</div>
