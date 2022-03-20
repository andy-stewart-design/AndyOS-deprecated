<script>
	import { page } from '$app/stores';
	import ThemeToggle from './ThemeToggle.svelte';

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

<nav
	class="fixed bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 md:ml-8 backdrop-blur-sm border border-black border-opacity-10 dark:border-gray-100 dark:border-opacity-10 rounded-full shadow-xl z-40"
>
	<div class="bg-gray-200 bg-opacity-70 dark:bg-gray-900 dark:bg-opacity-70 py-3 px-1 rounded-full">
		<ul class="flex items-center pointer-events-none">
			{#each links as link, index}
				{#if link.href}
					<li
						class="group relative py-1 px-2 border-r border-black border-opacity-20 dark:border-gray-200 dark:border-opacity-20 last:border-0 pointer-events-auto"
					>
						<a
							class="text-black dark:text-gray-100 py-2 px-4 rounded-full transition-opacity duration-300"
							href={link.href}
							sveltekit:prefetch
							sveltekit:noscroll>{link.anchor}</a
						>
						<div class="absolute -bottom-0.5 left-0 flex justify-center w-full">
							<div
								class="w-1 h-1 bg-gray-900 dark:bg-gray-100 rounded-full opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
								class:active={$page.url.pathname === link.href}
							/>
						</div>
					</li>
				{:else}
					<li
						class="text-black text-opacity-40 dark:text-gray-100 dark:text-opacity-40 py-1 px-6 border-r border-black border-opacity-20 dark:border-gray-200  dark:border-opacity-20 last:border-0 cursor-not-allowed pointer-events-auto"
					>
						{link.anchor}
					</li>
				{/if}
			{/each}
			<li class="h-8 w-16 pointer-events-auto">
				<div class="w-full h-full transition-opacity duration-300">
					<ThemeToggle />
				</div>
			</li>
		</ul>
	</div>
</nav>

<style>
	.active {
		@apply opacity-100 translate-y-0;
	}

	ul.flex:hover > *:not(.text-opacity-40) > a,
	ul.flex:hover > *:not(.text-opacity-40) > div {
		opacity: 0.4;
	}

	ul.flex:hover > *:not(.text-opacity-40):hover > a,
	ul.flex:hover > *:not(.text-opacity-40):hover > div {
		opacity: 1;
	}
</style>
