<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let loaded = false;

	onMount(() => {
		setTimeout(() => {
			loaded = true;
		}, 200);
	});
</script>

<div
	in:fly={{ y: 40, duration: 400, delay: 400 }}
	out:fly={{ duration: 400 }}
	on:outroend={() => {
		window.scroll(0, 0);
	}}
>
	<slot />
</div>
