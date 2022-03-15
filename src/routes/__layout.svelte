<script>
	import '../app.css';
	import Nav from '$lib/globals/Nav.svelte';
</script>

<svelte:head>
	<script src="/js/set-theme.js"></script>
</svelte:head>

<main class="relative bg-zinc-200 text-[#0d0d0e] dark:bg-[#0d0d0e] dark:text-zinc-100">
	<Nav />
	<slot />
</main>
