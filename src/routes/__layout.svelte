<script>
	import '../app.css';
	import { page } from '$app/stores';
	import Nav from '$lib/globals/Nav.svelte';
	import HomeBg from '$lib/components/HomeBG.svelte';
	import { windowWidth, windowHeight } from '$lib/stores/mainStore';

	let home;
	$: $page.url.pathname === '/' ? (home = true) : (home = false);
</script>

<svelte:head>
	<script src="/js/set-theme.js"></script>
</svelte:head>

<svelte:window bind:innerWidth={$windowWidth} bind:innerHeight={$windowHeight} />

<div class="relative bg-gray-200 text-black dark:bg-black dark:text-gray-100">
	<Nav />
	<div class="fixed top-0 left-0 h-screen w-screen">
		<HomeBg />
		<div
			class="absolute top-0 left-0 bottom-0 right-0 bg-gray-200 opacity-30 transition-opacity duration-[400] dark:bg-black"
			class:opacity-60={!home}
		/>
	</div>
	<slot />
</div>
