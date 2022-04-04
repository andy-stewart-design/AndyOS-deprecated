<script>
	import { onMount } from 'svelte';
	import { windowWidth, windowHeight } from '$lib/stores/mainStore';

	let canvas, ctx, frame, c1MoveX, c1MoveY, c1Rad, c2MoveX, c2MoveY, c2Rad;
	let count = 0;

	function draw() {
		frame = requestAnimationFrame(draw);
		ctx.clearRect(0, 0, $windowWidth, $windowHeight);
		const cX = $windowWidth / 2;
		const cY = $windowHeight / 2;
		// Circle 01
		c1Rad = $windowHeight;
		c1MoveX = cX + Math.cos(count) * cX;
		c1MoveY = cY + (Math.sin(count * 2) / 2) * cY;
		const c1Gradient = ctx.createRadialGradient(c1MoveX, c1MoveY, 0, c1MoveX, c1MoveY, c1Rad);
		c1Gradient.addColorStop(0, 'rgba(20, 63, 245,0.4)');
		c1Gradient.addColorStop(1, 'rgba(20, 63, 245,0.0)');
		ctx.fillStyle = c1Gradient;
		ctx.beginPath();
		ctx.arc(c1MoveX, c1MoveY, c1Rad, 0, 2 * Math.PI);
		ctx.fill();
		// Circle 02
		c2Rad = $windowHeight;
		c2MoveY = cY + Math.cos(count * 0.75) * cY;
		c2MoveX = cX + (Math.sin(count * 0.75 * 2) / 2) * cX;
		const c2Gradient = ctx.createRadialGradient(c2MoveX, c2MoveY, 0, c2MoveX, c2MoveY, c2Rad);
		c2Gradient.addColorStop(0, 'rgba(180, 9, 255,0.4)');
		c2Gradient.addColorStop(1, 'rgba(180, 9, 255,0.0)');
		ctx.fillStyle = c2Gradient;
		ctx.beginPath();
		ctx.arc(c2MoveX, c2MoveY, c2Rad, 0, 2 * Math.PI);
		ctx.fill();

		count += 0.01;
	}

	function set() {
		cancelAnimationFrame(frame);
		canvas.width = $windowWidth;
		canvas.height = $windowHeight;
		draw();
	}

	onMount(() => {
		ctx = canvas.getContext('2d');
		set();
		window.addEventListener('resize', set);
		return () => {
			cancelAnimationFrame(frame);
			window.removeEventListener('resize', set);
		};
	});
</script>

<div class="relative w-screen h-screen">
	<canvas bind:this={canvas} class="opacity-50 w-screen h-screen" />
</div>
