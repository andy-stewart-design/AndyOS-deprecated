<script>
	import '../app.css';
	import Nav from '$lib/globals/Nav.svelte';
</script>

<svelte:head>
	<script src="/js/set-theme.js"></script>
</svelte:head>

<main class="relative bg-gray-200 text-black dark:bg-black dark:text-gray-100">
	<Nav />
	<slot />
</main>
