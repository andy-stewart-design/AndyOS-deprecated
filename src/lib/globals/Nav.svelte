<script>
	import Sidebar from './Sidebar.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
	import Menu from './Menu.svelte';
</script>

<Sidebar />

<Menu />

<div
	class="fixed bottom-12 right-6 backdrop-blur-sm border border-black border-opacity-10 dark:border-gray-100 dark:border-opacity-10 rounded-full shadow-xl z-40"
>
	<div class="bg-gray-200 bg-opacity-70 dark:bg-gray-900 dark:bg-opacity-70 w-14 h-14 rounded-full">
		<ThemeToggle />
	</div>
</div>
