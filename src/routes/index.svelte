<script>
	import { fly } from 'svelte/transition';
	import { quartOut } from 'svelte/easing';
	import { duration } from '$lib/stores/mainStore';
	import PgTransSimple from '$lib/globals/PgTransSimple.svelte';
	import AppWindow from '$lib/components/AppWindow.svelte';
	import Smiley from '$lib/icons/Smiley.svelte';
	// import { draggable } from '@neodrag/svelte';
</script>

<PgTransSimple>
	<main class="relative w-full min-h-screen py-20 md:py-16 md:pl-18">
		<section class="relative flex justify-center w-full px-2 md:px-8">
			<div
				class="relative w-full md:max-w-4xl pb-4"
				in:fly={{ y: 120, duration: duration * 2, delay: duration * 1.5, easing: quartOut }}
			>
				<AppWindow title="welcome.md">
					<div class="grid gap-y-6 pt-8 px-4 pb-4 overflow-scroll">
						<div
							class="w-16 animate-rotate text-blue dark:text-neon"
							style="animation-duration: 10s"
						>
							<Smiley />
						</div>
						<h1 class="font-vf font-medium text-4xl md:text-5xl leading-tightest">
							Andy Stewart <span
								class="text-black text-opacity-60 dark:text-gray-100 dark:text-opacity-60"
								>designs future-focused visual systems. Often for screens, sometimes not.</span
							>
						</h1>
						<p
							class="font-vf font-normal text-lg text-black text-opacity-60 dark:text-gray-100 dark:text-opacity-60"
						>
							Andy’s a seasoned designer working at the intersection of brand and technology. He's
							currently the digital creative director at <a
								class="text-black text-opacity-100 dark:text-gray-100 dark:text-opacity-100"
								href="/">Turnstyle</a
							>, a small brand and web studio in Seattle. He's not currently accepting new projects,
							but he is accepting new friends.
						</p>
						<div
							class="flex gap-8 border-t border-black border-opacity-20 dark:border-gray-200 dark:border-opacity-20 pt-4"
						>
							<a
								href="/work"
								class="flex items-center gap-2 font-vf font-semibold text-xl hover:text-blue dark:hover:text-neon transition-colors duration-300"
								sveltekit:noscroll
								sveltekit:prefetch
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-8 w-8 text-blue dark:text-neon"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
									/>
								</svg>
								Work
							</a>
							<a
								href="/about"
								class="flex items-center gap-2 font-vf font-semibold text-xl hover:text-blue dark:hover:text-neon transition-colors duration-300"
								sveltekit:noscroll
								sveltekit:prefetch
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-8 w-8 text-blue dark:text-neon"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
								About
							</a>
						</div>
					</div>
				</AppWindow>
			</div>
		</section>
	</main>
</PgTransSimple>
