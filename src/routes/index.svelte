<script>
	import { fly } from 'svelte/transition';
	import { quartOut } from 'svelte/easing';
	import { duration } from '$lib/stores/mainStore';
	import PgTransSimple from '$lib/globals/PgTransSimple.svelte';
	import AppWindow from '$lib/components/AppWindow.svelte';
	import AndyLogo from '$lib/icons/AndyLogo.svelte';
	// import { draggable } from '@neodrag/svelte';
</script>

<PgTransSimple>
	<main class="relative w-full h-screen py-24 md:py-16 md:pl-18">
		<div
			class="absolute top-0 left-0 w-full h-full bg-gradient-to-tl from-rose-700 to-orange-400"
		/>
		<section class="relative flex justify-center w-full px-4 md:px-12">
			<div
				class="relative w-full md:max-w-4xl pb-4"
				in:fly={{ y: 120, duration: duration * 2, delay: duration * 1.5, easing: quartOut }}
			>
				<AppWindow title="welcome.md">
					<div class="grid gap-y-8">
						<div class="w-16">
							<AndyLogo />
						</div>
						<h1 class="text-4xl md:text-5xl font-bold">
							Andy Stewart <span
								class="text-black text-opacity-60 dark:text-gray-100 dark:text-opacity-60"
								>designs future-focused visual systems—often for screens, sometimes not.</span
							>
						</h1>
						<p class="text-lg text-black text-opacity-60 dark:text-gray-100 dark:text-opacity-60">
							Andy Stewart is a graphic designer working at the intersection of brand and
							technology. He is currently the digital creative director at <a
								class="text-black text-opacity-100 dark:text-gray-100 dark:text-opacity-100"
								href="/">Turnstyle</a
							>.
						</p>
					</div>
				</AppWindow>
			</div>
		</section>
	</main>
</PgTransSimple>
