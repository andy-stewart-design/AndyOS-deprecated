<script>
	import { page, navigating } from '$app/stores';
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
	let isOpen = false;
	$: if ($navigating) isOpen = false;
</script>

<div
	class="fixed bottom-6 right-2 backdrop-blur-sm border border-black border-opacity-10 dark:border-gray-100 dark:border-opacity-10 w-14 h-14 rounded-full shadow-xl z-40 overflow-hidden md:hidden"
	on:click={() => (isOpen = !isOpen)}
>
	<div
		class="flex justify-center items-center bg-gray-200 bg-opacity-70 dark:bg-gray-900 dark:bg-opacity-70 w-full h-full"
	>
		<div class="relative w-6 h-[2px]">
			<div
				class="absolute top-0 left-0 w-full h-full bg-white -translate-y-2 transition-transform duration-700 ease-out-quart"
				class:isOpen-iconTop={isOpen}
			/>
			<div
				class="w-full h-full bg-white origin-center transition-transform duration-700 ease-out-quart"
				class:isOpen-iconMid={isOpen}
			/>
			<div
				class="absolute top-0 left-0 w-full h-full bg-white translate-y-2 transition-transform duration-700 ease-out-quart"
				class:isOpen-iconBot={isOpen}
			/>
		</div>
	</div>
</div>

<nav
	class="fixed bottom-24 right-2 md:bottom-12 md:left-1/2 md:right-auto md:-translate-x-1/2 md:ml-8 backdrop-blur-sm border border-black border-opacity-10 dark:border-gray-100 dark:border-opacity-10 rounded-2xl md:rounded-full shadow-xl z-40 opacity-0 -translate-y-8 md:opacity-100 md:translate-y-0 transition-ot md:transition-none duration-500 ease-in-quint"
	class:isOpen
>
	<div
		class="bg-white bg-opacity-70 dark:bg-gray-900 dark:bg-opacity-70 py-1 md:py-3 px-1 rounded-2xl md:rounded-full"
	>
		<ul class="flex flex-col md:flex-row md:items-center pointer-events-none w-48 md:w-auto">
			{#each links as link, index}
				{#if link.href}
					<li
						class="group relative py-4 md:py-1 px-2 border-b md:border-b-0 md:border-r border-black border-opacity-20 dark:border-gray-200 dark:border-opacity-20 last:border-0 pointer-events-auto"
					>
						<a
							class="text-black dark:text-gray-100 text-lg md:text-base font-medium py-2 px-4 rounded-full transition-opacity duration-300"
							href={link.href}
							sveltekit:prefetch
							sveltekit:noscroll>{link.anchor}</a
						>
						<div
							class="absolute bottom-0 md:-bottom-0.5 left-0 flex justify-center items-center w-6 md:w-full h-full md:h-auto"
						>
							<div
								class="w-1 h-1 bg-gray-900 dark:bg-gray-100 rounded-full opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
								class:active={$page.url.pathname === link.href}
							/>
						</div>
					</li>
				{:else}
					<li
						class="text-black text-opacity-40 dark:text-gray-100 dark:text-opacity-40 font-medium py-4 md:py-1 px-6 border-b md:border-b-0 md:border-r border-black border-opacity-20 dark:border-gray-200 dark:border-opacity-20 last:border-0 cursor-not-allowed pointer-events-auto"
					>
						{link.anchor}
					</li>
				{/if}
			{/each}
			<li class="h-14 md:h-8 w-16 pointer-events-auto">
				<div class="w-full h-full transition-opacity duration-300">
					<ThemeToggle />
				</div>
			</li>
		</ul>
	</div>
</nav>

<style>
	.isOpen {
		@apply opacity-100 translate-y-0;
	}

	.isOpen-iconTop {
		@apply translate-y-0 -rotate-45;
	}

	.isOpen-iconMid {
		@apply scale-x-0;
	}

	.isOpen-iconBot {
		@apply translate-y-0 rotate-45;
	}

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
