<script>
	import { fade } from 'svelte/transition';
	import { quadOut } from 'svelte/easing';
	import { duration } from '$lib/stores/mainStore';
</script>

<div
	in:fade={{ duration: duration, delay: duration * 1.5, easing: quadOut }}
	out:fade={{ duration: duration, easing: quadOut }}
	on:outroend={() => {
		window.scroll(0, 0);
	}}
>
	<slot />
</div>
