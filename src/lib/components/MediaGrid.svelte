<script>
	import Image from '$lib/components/Image.svelte';
	import Video from '$lib/components/Video.svelte';

	export let contents;

	function setWidth(width) {
		if (width === '1/2') {
			return 'col-span-1';
		} else {
			return 'col-span-1 lg:col-span-2';
		}
	}

	function setText(width) {
		if (width === '1/2') {
			return 'max-w-xl';
		} else if (width === '1/1') {
			return 'max-w-4xl m-auto mt-16';
		}
	}
</script>

<section class="relative grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-12 p-8">
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
					<h3 class="text-4xl font-bold mb-6" class:hidden={!item.head}>{item.head}</h3>
					<p class="text-xl" class:hidden={!item.body}>{item.body}</p>
				</div>
			{:else if item.type === 'video'}
				<Video src={item.src} lazy={true} ratio={item.ratio} />
			{/if}
		</div>
	{/each}
</section>
