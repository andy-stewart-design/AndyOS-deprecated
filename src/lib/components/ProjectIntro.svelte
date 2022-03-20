<script>
	export let content;
</script>

<section class="relative p-8 py-40">
	<div class="grid grid-cols-1 lg:grid-cols-3 gap-x-24 gap-y-16 max-w-7xl m-auto">
		<h2 class="text-6xl font-bold col-span-1 lg:col-span-3">
			{content.client} <span class="opacity-40">{content.headline}</span>
		</h2>
		<div class="grid grid-cols-1 gap-4 col-span-1 lg:col-span-2 auto-rows-min">
			<h3 class="text-sm uppercase tracking-widest">Overview</h3>
			<div class="grid grid-cols-1 gap-4 col-span-1 lg:col-span-3">
				{#each content.descr as paragraph}
					<p class="text-xl">{paragraph}</p>
				{/each}
			</div>
		</div>
		<div class="grid grid-cols-1 gap-4 col-span-1 auto-rows-min">
			<h3 class="text-sm uppercase tracking-widest">Scope</h3>
			<ul class="text-xl">
				{#each content.scope as listItem}
					<li>{listItem}</li>
				{/each}
			</ul>
		</div>
	</div>
</section>
