<script>
	// available aspect ratios: 16:9 (video), 2:3 (film), 5:4 (common), 1:1 (Square)
	export let ratio = 'aspect-video';
	export let lazy = false;
	export let src = '';
	export let alt = "andy's image";
	// this conditional allows me to always only declare a src on instances of this component
	// instead of having to use dataSrc when declaring that 'lazy' is true
	let dataSrc = '/';
	if (lazy) {
		dataSrc = src;
		if (ratio === 'aspect-video') {
			src = '/img/misc/placeholder-video.svg';
		} else if (ratio === 'aspect-film') {
			src = '/img/misc/placeholder-film.svg';
		} else if (ratio === 'aspect-common') {
			src = '/img/misc/placeholder-common.svg';
		} else {
			src = '/img/misc/placeholder-square.svg';
		}
	}
</script>

<!-- lazy-media and lazy-media-inview classes are in app.css -->
<div class="w-full bg-black bg-opacity-5 dark:bg-gray-200 dark:bg-opacity-5 overflow-hidden">
	<img
		class="w-full transition-all origin-top duration-700 ease-out-cubic object-cover {ratio}"
		class:lazy-media={lazy}
		{src}
		data-src={dataSrc}
		{alt}
	/>
</div>
