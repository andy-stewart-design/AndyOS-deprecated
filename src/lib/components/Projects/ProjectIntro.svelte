<script>
	export let content;
</script>

<section class="relative py-24 md:py-40 md:pb-24">
	<div class="m-auto grid max-w-7xl grid-cols-1 gap-x-24 gap-y-12 lg:grid-cols-3">
		<h2 class="col-span-1 text-5xl font-medium leading-[1.1] md:text-6xl lg:col-span-3 lg:text-7xl">
			{content.headline}
		</h2>
		<div class="col-span-1 grid auto-rows-min grid-cols-1 gap-4 lg:col-span-2">
			<h3 class="font-mono text-sm">Overview</h3>
			<div class="col-span-1 grid grid-cols-1 gap-4 lg:col-span-3">
				{#each content.descr as paragraph}
					<p class="text-xl">{paragraph}</p>
				{/each}
			</div>
		</div>
		<div class="col-span-1 grid auto-rows-min grid-cols-1 gap-4">
			<h3 class="font-mono text-sm">Scope</h3>
			<ul class="text-xl">
				{#each content.scope as listItem}
					<li>{listItem}</li>
				{/each}
			</ul>
		</div>
	</div>
</section>
