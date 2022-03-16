<script>
	import AndyLogo from '$lib/icons/AndyLogo.svelte';
	import Marquee from '$lib/components/Marquee.svelte';
</script>

<div
	class="fixed top-0 left-0 w-screen md:w-auto md:h-screen border-b md:border-b-0 md:border-r border-black border-opacity-20 dark:border-gray-100 dark:border-opacity-20 z-40"
>
	<div
		class="relative bg-gray-200 dark:bg-black bg-opacity-20 dark:bg-opacity-20 w-full md:w-18 h-18 md:h-screen"
	>
		<div
			class="absolute top-0 md:top-18 left-18 md:left-0 flex justify-center items-center w-full md:w-[100vh] h-18 md:origin-top-left md:rotate-90 md:translate-x-18 pointer-events-none opacity-60"
		>
			<Marquee contents="Strategy + Design + Code + Illustration +" gap="pr-1" width="w-full" />
		</div>
		<div
			class="relative flex justify-center items-center w-18 h-18 border-r md:border-r-0 md:border-b border-black border-opacity-20 dark:border-gray-100 dark:border-opacity-20"
		>
			<a
				class="w-full h-full p-2.5 transition-all duration-300 hover:bg-gray-200 hover:bg-opacity-30 dark:hover:-black dark:hover:bg-opacity-30"
				href="/"
				sveltekit:prefetch
				sveltekit:noscroll
			>
				<AndyLogo />
			</a>
		</div>
	</div>
</div>
