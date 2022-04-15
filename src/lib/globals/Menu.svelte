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
	class="fixed bottom-6 right-2 z-40 h-14 w-14 overflow-hidden rounded-full border border-black border-opacity-10 shadow-xl backdrop-blur-sm dark:border-gray-100 dark:border-opacity-10 md:hidden"
	on:click={() => (isOpen = !isOpen)}
>
	<div
		class="flex h-full w-full items-center justify-center bg-gray-200 bg-opacity-70 dark:bg-gray-900 dark:bg-opacity-70"
	>
		<div class="relative h-[2px] w-6">
			<div
				class="ease-out-quart absolute top-0 left-0 h-full w-full -translate-y-2 bg-white transition-transform duration-700"
				class:isOpen-iconTop={isOpen}
			/>
			<div
				class="ease-out-quart h-full w-full origin-center bg-white transition-transform duration-700"
				class:isOpen-iconMid={isOpen}
			/>
			<div
				class="ease-out-quart absolute top-0 left-0 h-full w-full translate-y-2 bg-white transition-transform duration-700"
				class:isOpen-iconBot={isOpen}
			/>
		</div>
	</div>
</div>

<nav
	class="ease-in-quint fixed bottom-24 right-2 z-40 -translate-y-8 rounded-2xl border border-black border-opacity-10 opacity-0 shadow-xl backdrop-blur-sm transition-ot duration-500 dark:border-gray-100 dark:border-opacity-10 md:bottom-12 md:left-1/2 md:right-auto md:ml-8 md:-translate-x-1/2 md:translate-y-0 md:rounded-full md:opacity-100 md:transition-none"
	class:isOpen
>
	<div
		class="rounded-2xl bg-white bg-opacity-70 py-1 px-1 dark:bg-gray-900 dark:bg-opacity-70 md:rounded-full md:py-3"
	>
		<ul class="pointer-events-none flex w-48 flex-col md:w-auto md:flex-row md:items-center">
			{#each links as link, index}
				{#if link.href}
					<li
						class="group pointer-events-auto relative border-b border-black border-opacity-20 py-4 px-2 last:border-0 dark:border-gray-200 dark:border-opacity-20 md:border-b-0 md:border-r md:py-1"
					>
						<a
							class="rounded-full py-2 px-4 text-lg font-semibold text-gray-900 transition-opacity duration-300 dark:text-gray-200 md:text-base"
							href={link.href}
							sveltekit:prefetch
							sveltekit:noscroll>{link.anchor}</a
						>
						<div
							class="absolute bottom-0 left-0 flex h-full w-6 items-center justify-center md:-bottom-0.5 md:h-auto md:w-full"
						>
							<div
								class="h-1 w-1 translate-y-2 rounded-full bg-gray-900 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 dark:bg-gray-200"
								class:active={$page.url.pathname === link.href}
							/>
						</div>
					</li>
				{:else}
					<li
						class="text-gray-900 text-opacity-40 dark:text-gray-200 dark:text-opacity-40 font-semibold py-4 md:py-1 px-6 border-b md:border-b-0 md:border-r border-black border-opacity-20 dark:border-gray-200 dark:border-opacity-20 last:border-0 cursor-not-allowed pointer-events-auto"
					>
						{link.anchor}
					</li>
				{/if}
			{/each}
			<li class="pointer-events-auto h-14 w-16 md:h-8">
				<div class="h-full w-full text-gray-900 transition-opacity duration-300 dark:text-gray-200">
					<ThemeToggle />
				</div>
			</li>
		</ul>
	</div>
</nav>

<style>
	.isOpen {
		@apply translate-y-0 opacity-100;
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
		@apply translate-y-0 opacity-100;
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
