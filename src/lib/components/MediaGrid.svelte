<script>
	import Image from '$lib/components/Image.svelte';
	import Video from '$lib/components/Video.svelte';

	export let contents;

	function setWidth(width) {
		if (width === 'half-left') {
			return 'half-left';
		} else if (width === 'half-right') {
			return 'half-right';
		} else if (width === 'inset') {
			return 'inset';
		} else {
			return 'full';
		}
	}

	function setText(width) {
		if (width === 'half-left' || width === 'half-right') {
			return 'max-w-xl';
		} else if (width === 'full' || width === 'inset') {
			return 'max-w-4xl m-auto mt-16';
		}
	}
</script>

<!-- <section class="relative grid grid-cols-1 items-center gap-8 md:gap-12 lg:grid-cols-2"> -->
<section class="project-grid relative items-center">
	{#each contents as item, index}
		<div class="{setWidth(item.width)} text-zinc-800 dark:text-zinc-200">
			{#if item.type === 'image'}
				<Image
					src={item.src}
					ratio={item.ratio}
					alt={item.alt ? item.alt : 'portfolio image'}
					lazy={true}
				/>
			{:else if item.type === 'text'}
				<div class={setText(item.width)}>
					<!-- <div class="w-full h-px bg-zinc-800 dark:bg-zinc-200 mb-12" /> -->
					<h3
						class="text-4xl font-medium mb-6 text-gray-900 dark:text-gray-200"
						class:hidden={!item.head}
					>
						{item.head}
					</h3>
					<p class="text-xl" class:hidden={!item.body}>{item.body}</p>
				</div>
			{:else if item.type === 'video'}
				<Video src={item.src} lazy={true} ratio={item.ratio} />
			{/if}
		</div>
	{/each}
</section>

<style>
	.project-grid {
		display: grid;
		column-gap: 2rem;
		row-gap: 3rem;
		grid-template-columns: 0 minmax(0, 1fr) 0;
	}
	.full {
		grid-column: 1 / -1;
	}
	.inset {
		grid-column: 2 / 3;
	}
	.half-left {
		grid-column: 2/3;
	}
	.half-right {
		grid-column: 2/3;
	}
	@media (min-width: 1024px) {
		.project-grid {
			display: grid;
			column-gap: 4rem;
			row-gap: 6rem;
			grid-template-columns: 2rem minmax(0, 1fr) minmax(0, 1fr) 2rem;
		}
		.full {
			grid-column: 1 / -1;
		}
		.inset {
			grid-column: 2 / 4;
		}
		.half-left {
			grid-column: 2/3;
		}
		.half-right {
			grid-column: 3/4;
		}
	}
</style>
