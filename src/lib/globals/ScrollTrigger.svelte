<script>
	import { onMount } from 'svelte';
	export let left = '0px';
	export let right = '0px';
	export let top = '0px';
	export let bottom = '0px';
	let wrapper;
	let options = { rootMargin: `${top} ${right} ${bottom} ${left}` };

	function obsCallback(entries, obs) {
		entries.forEach((entry) => {
			if (entry.target.nodeName === 'IMG') {
				if (entry.isIntersecting) {
					let image = entry.target;
					console.log(image);
					image.src = image.dataset.src;
					setTimeout(() => {
						image.classList.add('lazy-media-inview');
					}, 400);
					obs.unobserve(image);
				}
			}
			if (entry.target.nodeName === 'VIDEO') {
				let video = entry.target;
				// video.src = video.dataset.src;
				if (entry.isIntersecting && video.paused) {
					video.play();
					setTimeout(() => {
						video.classList.add('lazy-media-inview');
					}, 400);
					// console.log('video is playing');
				} else if (!entry.isIntersecting && !video.paused) {
					video.pause();
					// console.log('video is paused');
				}
			}
		});
	}

	onMount(() => {
		const els = wrapper.querySelectorAll('.lazy-media');
		const observer = new IntersectionObserver(obsCallback, options);

		els.forEach(function (el) {
			observer.observe(el);
		});

		return () => observer.disconnect();
	});
</script>

<div bind:this={wrapper}>
	<slot />
</div>
