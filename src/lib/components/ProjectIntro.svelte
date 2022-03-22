<script>
	export let content;
</script>

<section class="relative p-2 md:p-8 py-24 md:py-40">
	<div class="grid grid-cols-1 lg:grid-cols-3 gap-x-24 gap-y-12 max-w-7xl m-auto">
		<h2 class="text-5xl md:text-6xl font-bold leading-[1.1] col-span-1 lg:col-span-3">
			{content.client}<span
				class="relative opacity-40 ml-4 pl-4 before:absolute before:top-2 before:left-0 before:h-12 before:border-l-2 md:before:h-14 md:before:top-[10px]"
				>{content.headline}</span
			>
		</h2>
		<div class="grid grid-cols-1 gap-4 col-span-1 lg:col-span-2 auto-rows-min">
			<h3 class="text-sm font-bold uppercase tracking-widest">Overview</h3>
			<div class="grid grid-cols-1 gap-4 col-span-1 lg:col-span-3">
				{#each content.descr as paragraph}
					<p class="text-xl">{paragraph}</p>
				{/each}
			</div>
		</div>
		<div class="grid grid-cols-1 gap-4 col-span-1 auto-rows-min">
			<h3 class="text-sm font-bold uppercase tracking-widest">Scope</h3>
			<ul class="text-xl">
				{#each content.scope as listItem}
					<li>{listItem}</li>
				{/each}
			</ul>
		</div>
	</div>
</section>
