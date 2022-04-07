<script>
	import AndyLogo from '$lib/icons/AndyLogo.svelte';
	import Marquee from '$lib/components/Marquee.svelte';
</script>

<div
	class="fixed top-0 left-0 w-screen md:w-auto md:h-screen border-b md:border-b-0 md:border-r border-black border-opacity-20 dark:border-gray-100 dark:border-opacity-20 z-40 backdrop-blur-sm"
>
	<div
		class="relative w-full md:w-18 h-16 md:h-screen bg-gray-200 bg-opacity-30 dark:bg-black dark:bg-opacity-20 md:bg-opacity-0 md:dark:bg-opacity-0"
	>
		<div
			class="absolute top-0 md:top-18 left-16 md:left-0 flex justify-center items-center font-mono w-full md:w-[100vh] h-16 md:h-18 md:origin-top-left md:rotate-90 md:translate-x-18 pointer-events-none opacity-60"
		>
			<Marquee
				contents="Strategy + Design + Code + Illustration + Motion +"
				gap="pr-1"
				width="w-full"
			/>
		</div>
		<div
			class="relative flex justify-center items-center w-16 h-16 md:w-18 md:h-18 border-r md:border-r-0 md:border-b border-black border-opacity-20 dark:border-gray-100 dark:border-opacity-20"
		>
			<a
				class="w-full h-full p-2.5 bg-black bg-opacity-0 dark:bg-gray-200 dark:bg-opacity-0 hover:text-blue dark:hover:text-neon transition-colors duration-300"
				href="/"
				sveltekit:prefetch
				sveltekit:noscroll
			>
				<AndyLogo />
			</a>
		</div>
	</div>
</div>
