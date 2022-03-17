<script>
	import PgTransSimple from '$lib/globals/PgTransSimple.svelte';
</script>

<PgTransSimple>
	<main class="relative w-full h-screen pt-32 md:pt-24 pb-40 md:pl-18">
		<section class="grid gap-y-12 px-4 md:px-16">
			<h1 class="text-6xl">Portfolio</h1>
			<div class="grid md:grid-cols-2 gap-x-6 gap-y-12">
				{#each Array(6) as _}
					<div>
						<div class="aspect-square bg-gray-800 rounded-3xl mb-4" />
						<div>
							<h2 class="text-4xl">Wildtype</h2>
						</div>
					</div>
				{/each}
			</div>
		</section>
	</main>
</PgTransSimple>
