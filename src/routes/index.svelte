<script>
	import PgTransSimple from '$lib/globals/PgTransSimple.svelte';
	import AppWindow from '$lib/components/AppWindow.svelte';
	import AndyLogo from '$lib/icons/AndyLogo.svelte';
	import { draggable } from '@neodrag/svelte';
</script>

<PgTransSimple>
	<section class="relative flex justify-center w-full h-screen py-16 px-4 md:px-16">
		<div
			class="absolute top-0 left-0 w-full h-full bg-gradient-to-tl from-rose-700 to-orange-400"
		/>
		<div class="relative w-full md:max-w-4xl pb-4" use:draggable>
			<AppWindow title="welcome.md">
				<div class="grid gap-y-8">
					<div class="w-16">
						<AndyLogo />
					</div>
					<h1 class="text-5xl font-bold">
						Andy Stewart <span
							class="text-[#0d0d0e] text-opacity-60 dark:text-zinc-100 dark:text-opacity-60"
							>designs future-focused visual systems—often for screens, sometimes not.</span
						>
					</h1>
					<p class="text-lg text-[#0d0d0e] text-opacity-60 dark:text-zinc-100 dark:text-opacity-60">
						Andy Stewart is a graphic designer working at the intersection of brand and technology.
						He is currently the digital creative director at <a
							class="text-[#0d0d0e] text-opacity-100 dark:text-zinc-100 dark:text-opacity-100"
							href="/">Turnstyle</a
						>.
					</p>
				</div>
			</AppWindow>
		</div>
	</section>
</PgTransSimple>
