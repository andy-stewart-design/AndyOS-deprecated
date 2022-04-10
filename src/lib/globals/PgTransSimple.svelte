<script>
	import { fade } from 'svelte/transition';
	import { quadOut } from 'svelte/easing';
	import { duration } from '$lib/stores/mainStore';
</script>

<div
	in:fade={{ duration: duration, delay: duration, easing: quadOut }}
	out:fade={{ duration: duration / 2, easing: quadOut }}
	on:outroend={() => {
		window.scroll(0, 0);
	}}
>
	<slot />
</div>
