<script>
	import PgTransSimple from '$lib/globals/PgTransSimple.svelte';
</script>

<PgTransSimple>
	<section class="grid gap-y-12 pt-24 pb-40 px-32 mx-auto">
		<h1 class="text-6xl">Portfolio</h1>
		<div class="grid grid-cols-2 gap-x-6 gap-y-12">
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
</PgTransSimple>
