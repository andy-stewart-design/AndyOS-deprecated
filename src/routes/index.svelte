<script>
	import { fly } from 'svelte/transition';
	import { quartOut } from 'svelte/easing';
	import { duration } from '$lib/stores/mainStore';
	import PgTransSimple from '$lib/globals/PgTransSimple.svelte';
	import AppWindow from '$lib/components/AppWindow.svelte';
	import Smiley from '$lib/icons/Smiley.svelte';
	import Phone from '$lib/icons/Phone.svelte';
	import User from '$lib/icons/User.svelte';
	// import { draggable } from '@neodrag/svelte';

	const links = [
		{ text: 'Work', url: '/work', icon: Phone },
		{ text: 'About', url: '/about', icon: User }
	];
</script>

<PgTransSimple>
	<main class="relative min-h-screen w-full py-20 md:py-16 md:pl-18">
		<section class="relative flex w-full justify-center px-2 md:px-8">
			<div
				class="relative w-full pb-4 md:max-w-4xl"
				in:fly={{ y: 120, duration: duration * 2, delay: duration * 1.5, easing: quartOut }}
			>
				<AppWindow title="welcome.md">
					<div class="grid gap-y-6 overflow-scroll px-4 pt-8 pb-4">
						<div
							class="w-16 animate-rotate text-blue transition-colors duration-[400] dark:text-neon"
							style="animation-duration: 10s"
						>
							<Smiley />
						</div>
						<h1 class="font-vf text-4xl font-semibold leading-tightest md:text-5xl">
							<span class="text-gray-900 dark:text-gray-200">Andy Stewart</span> designs future-focused
							visual systems. Often for screens, sometimes not.
						</h1>
						<p class="font-vf text-lg font-normal">
							Andy’s a seasoned designer working at the intersection of brand and technology. He's
							currently the digital creative director at <a
								class="font-semibold text-gray-900 dark:text-gray-200"
								href="/">Turnstyle</a
							>, a small brand and web studio in Seattle. He's not currently accepting new projects,
							but he is accepting new friends.
						</p>
						<div
							class="mt-2 flex gap-8 border-t border-black border-opacity-20 pt-4 dark:border-gray-200 dark:border-opacity-20"
						>
							{#each links as link}
								<a
									href={link.url}
									class="flex items-center gap-2 font-vf text-xl font-semibold text-gray-900 transition-colors duration-300 hover:text-blue dark:text-gray-200 dark:hover:text-neon"
									sveltekit:noscroll
									sveltekit:prefetch
								>
									<div class="h-8 w-8 text-blue dark:text-neon">
										<svelte:component this={link.icon} />
									</div>
									{link.text}
								</a>
							{/each}
						</div>
					</div>
				</AppWindow>
			</div>
		</section>
	</main>
</PgTransSimple>
