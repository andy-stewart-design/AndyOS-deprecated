<script>
	import '../app.css';
	import Nav from '$lib/globals/Nav.svelte';
	import HomeBg from '$lib/components/HomeBG.svelte';
	import { windowWidth, windowHeight } from '$lib/stores/mainStore';
</script>

<svelte:head>
	<script src="/js/set-theme.js"></script>
</svelte:head>

<svelte:window bind:innerWidth={$windowWidth} bind:innerHeight={$windowHeight} />

<div class="relative bg-gray-200 text-black dark:bg-black dark:text-gray-100">
	<Nav />
	<div class="fixed top-0 left-0 w-screen h-screen">
		<HomeBg />
	</div>
	<!-- <div class="opacity-0"> -->
	<slot />
	<!-- </div> -->
</div>
