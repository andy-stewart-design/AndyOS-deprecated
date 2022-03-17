<script>
	import '../app.css';
	import Nav from '$lib/globals/Nav.svelte';
</script>

<svelte:head>
	<script src="/js/set-theme.js"></script>
</svelte:head>

<div class="relative bg-gray-300 text-black dark:bg-black dark:text-gray-100">
	<Nav />
	<slot />
</div>
