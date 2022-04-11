<script>
	export let content;
</script>

<div class="relative flex items-center w-full h-[calc(100vh-4.5rem)] p-6 bg-black">
	<img
		src={content.image}
		class="absolute top-0 left-0 w-full h-full object-cover opacity-80"
		alt="kn"
	/>
	<h2
		class="relative text-6xl sm:text-8xl md:text-9xl lg:text-[144px] font-black text-center text-gray-200 uppercase tracking-tight w-full"
	>
		{content.client}
	</h2>
</div>
