<script>
	import { fade } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import { slide } from '$lib/actions/slide';

	export let title = 'kjqwekjn';
	export let isOpen = false;
</script>

<div class="border-b border-black border-opacity-20 dark:border-gray-200 dark:border-opacity-20">
	<div class="mb-4">
		<button
			class="font-book relative w-full py-3 text-left text-5xl text-gray-900 dark:text-gray-200"
			on:click={() => (isOpen = !isOpen)}
			>{title}
			<span
				class="absolute right-0 origin-center text-5xl font-extralight transition-transform"
				class:rotate-45={isOpen}>+</span
			></button
		>
	</div>
	<div use:slide={isOpen}>
		<div class="pb-8">
			<div transition:fade={{ duration: 500, easing: cubicInOut }}>
				<slot />
			</div>
		</div>
	</div>
</div>
