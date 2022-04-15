<script>
	import AndyLogo from '$lib/icons/AndyLogo.svelte';
	import Marquee from '$lib/components/Marquee.svelte';
</script>

<div
	class="fixed top-0 left-0 z-40 w-screen border-b border-black border-opacity-20 backdrop-blur-sm dark:border-gray-100 dark:border-opacity-20 md:h-screen md:w-auto md:border-b-0 md:border-r"
>
	<div
		class="relative h-16 w-full bg-gray-200 bg-opacity-30 dark:bg-black dark:bg-opacity-20 md:h-screen md:w-18 md:bg-opacity-0 md:dark:bg-opacity-0"
	>
		<div
			class="pointer-events-none absolute top-0 left-16 flex h-16 w-full items-center justify-center font-mono opacity-60 md:top-18 md:left-0 md:h-18 md:w-[100vh] md:origin-top-left md:translate-x-18 md:rotate-90"
		>
			<Marquee
				contents="Strategy + Design + Code + Illustration + Motion +"
				gap="pr-1"
				width="w-full"
			/>
		</div>
		<div
			class="relative flex h-16 w-16 items-center justify-center border-r border-black border-opacity-20 dark:border-gray-100 dark:border-opacity-20 md:h-18 md:w-18 md:border-r-0 md:border-b"
		>
			<a
				class="h-full w-full bg-black bg-opacity-0 p-2.5 text-gray-900 transition-colors duration-300 hover:text-blue dark:bg-gray-200 dark:bg-opacity-0 dark:text-gray-200 dark:hover:text-neon"
				href="/"
				sveltekit:prefetch
				sveltekit:noscroll
			>
				<AndyLogo />
			</a>
		</div>
	</div>
</div>
