<script>
	import AndyLogo from '$lib/icons/AndyLogo.svelte';
	// main nav links
	const links = [
		{
			anchor: 'Home',
			href: '/'
		},
		{
			anchor: 'Work',
			href: '/work'
		},
		{
			anchor: 'Writing'
		},
		{
			anchor: 'About',
			href: '/about'
		}
	];
</script>

<!-- sidebar -->
<div
	class="fixed top-0 left-0  h-screen border-r border-[#0d0d0e] border-opacity-10 dark:border-zinc-100 dark:border-opacity-10 z-40"
>
	<div
		class="relative bg-zinc-200 dark:bg-[#0d0d0e] bg-opacity-20 dark:bg-opacity-20 w-18 h-screen"
	>
		<div
			class="absolute top-0 left-0 flex justify-center items-center w-[100vh] h-18 origin-top-left rotate-90 translate-x-18 pointer-events-none"
		>
			<p>If you're reading this it's just lorem ipsum</p>
		</div>
		<div
			class="relative flex justify-center items-center w-18 h-18 border-b border-[#0d0d0e] border-opacity-20 dark:border-zinc-100 dark:border-opacity-20"
		>
			<a
				class="w-full h-full p-2.5 transition-all duration-300 hover:bg-zinc-200 hover:bg-opacity-30 dark:hover:-[#0d0d0e] dark:hover:bg-opacity-30"
				href="/"
				sveltekit:prefetch
				sveltekit:noscroll
			>
				<AndyLogo />
			</a>
		</div>
	</div>
</div>

<!-- main nav / don't miss the hover styles at the bottom of the page -->
<nav
	class="fixed bottom-12 left-1/2 -translate-x-1/2 backdrop-blur-sm border border-[#0d0d0e] border-opacity-10 dark:border-zinc-100 dark:border-opacity-10 rounded-full shadow-xl z-40"
>
	<div
		class="bg-zinc-200 bg-opacity-70 dark:bg-[#1b1b1d] dark:bg-opacity-70 py-4 px-1 rounded-full"
	>
		<ul class="flex items-center pointer-events-none">
			{#each links as link, index}
				{#if link.href}
					<li
						class="group relative py-0 px-2 border-r border-[#0d0d0e] border-opacity-20 dark:border-zinc-200 dark:border-opacity-20 last:border-0 pointer-events-auto"
					>
						<a
							class="text-[#0d0d0e] dark:text-zinc-100 py-2 px-4 rounded-full transition-opacity duration-300"
							href={link.href}
							sveltekit:prefetch
							sveltekit:noscroll>{link.anchor}</a
						>
						<div class="absolute -bottom-1 left-0 flex justify-center w-full">
							<div
								class="w-1 h-1 bg-[#1b1b1d] dark:bg-zinc-100 rounded-full opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
							/>
						</div>
					</li>
				{:else}
					<li
						class="text-[#0d0d0e] text-opacity-40 dark:text-zinc-100 dark:text-opacity-40 py-0 px-6 border-r border-[#0d0d0e] border-opacity-20 dark:border-zinc-200  dark:border-opacity-20 last:border-0 cursor-not-allowed pointer-events-auto"
					>
						{link.anchor}
					</li>
				{/if}
			{/each}
		</ul>
	</div>
</nav>

<!-- hover styles for the main nav -->
<style>
	ul.flex:hover > *:not(.text-opacity-40) > a {
		opacity: 0.4;
	}

	ul.flex:hover > *:not(.text-opacity-40):hover > a {
		opacity: 1;
	}
</style>
