<script>
	export let content;
</script>

<div class="relative flex h-[calc(100vh-4.5rem)] w-full items-center bg-black p-6">
	<img
		src={content.image}
		class="absolute top-0 left-0 h-full w-full object-cover opacity-80"
		alt="kn"
	/>
	<h2
		class="relative w-full text-center text-6xl font-black uppercase tracking-tight text-gray-100 text-opacity-90 sm:text-8xl md:text-9xl lg:text-[144px]"
	>
		{content.client}
	</h2>
</div>
