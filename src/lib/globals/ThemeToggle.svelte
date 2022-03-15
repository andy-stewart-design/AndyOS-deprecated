<script>
	import { onMount } from 'svelte';
	import { theme, storageKey } from '$lib/stores/mainStore';

	let html;
	let toggle;

	function setTheme() {
		$theme === 'light' ? theme.set('dark') : theme.set('light');
		console.log($theme);
		if ($theme === 'light') {
			html.classList.replace('dark', 'light');
		} else {
			html.classList.replace('light', 'dark');
		}
		localStorage.setItem(storageKey, $theme);
		toggle.setAttribute('aria-label', $theme);
	}

	onMount(() => {
		const getTheme = localStorage.getItem(storageKey);
		theme.set(getTheme);
		html = document.firstElementChild;
		window
			.matchMedia('(prefers-color-scheme: dark)')
			.addEventListener('change', ({ matches: isDark }) => {
				$theme = isDark ? 'light' : 'dark';
				setTheme();
			});
	});
</script>

<button
	class="theme-toggle flex justify-center items-center w-full h-full"
	bind:this={toggle}
	on:click={setTheme}
	title="Toggles light & dark"
	aria-label="auto"
>
	<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
		{#if $theme === 'light'}
			<path
				fill-rule="evenodd"
				d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
				clip-rule="evenodd"
			/>
		{:else}
			<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
		{/if}
	</svg>
</button>
