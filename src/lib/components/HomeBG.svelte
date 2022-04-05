<script>
	import { onMount } from 'svelte';
	import { windowWidth, windowHeight } from '$lib/stores/mainStore';

	let canvas, ctx, frame, c2MoveX, c2MoveY, c2Rad;
	let count = 0;
	const twoPi = Math.PI * 2;

	class Circle {
		constructor(x, y, r, c1, c2, t) {
			this.x = x;
			this.y = y;
			this.r = r;
			this.c1 = c1;
			this.c2 = c2;
			this.t = t;
		}
		draw() {
			const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.r);
			gradient.addColorStop(0, this.c1);
			gradient.addColorStop(1, this.c2);
			ctx.fillStyle = gradient;
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.r, 0, twoPi, false);
			ctx.fill();
		}
		// update() {}
	}

	function set() {
		cancelAnimationFrame(frame);
		canvas.width = $windowWidth;
		canvas.height = $windowHeight;
		draw();
	}

	function draw() {
		frame = requestAnimationFrame(draw);
		ctx.clearRect(0, 0, $windowWidth, $windowHeight);
		const cX = $windowWidth / 2;
		const cY = $windowHeight / 2;
		const r = $windowHeight;

		const c1vX = cX + Math.cos(count) * cX;
		const c1vY = cY + (Math.sin(count * 2) / 2) * cY;
		const c1col1 = 'rgba(20, 63, 245,0.4)';
		const c1col2 = 'rgba(20, 63, 245,0.0)';
		const c2vX = cX + (Math.sin(count * 0.75 * 2) / 2) * cX;
		const c2vY = cY + Math.cos(count * 0.75) * cY;
		const c2col1 = 'rgba(180, 9, 255,0.4)';
		const c2col2 = 'rgba(180, 9, 255,0.0)';

		const circ01 = new Circle(c1vX, c1vY, r, c1col1, c1col2, count);
		const circ02 = new Circle(c2vX, c2vY, r, c2col1, c2col2, count);
		circ01.draw();
		circ02.draw();

		count += 0.01;
	}

	onMount(() => {
		ctx = canvas.getContext('2d');
		ctx.globalCompositeOperation = 'multiply';
		set();
		window.addEventListener('resize', set);
		return () => {
			cancelAnimationFrame(frame);
			window.removeEventListener('resize', set);
		};
	});
</script>

<div class="relative w-screen h-screen">
	<canvas bind:this={canvas} class="opacity-70 w-screen h-screen" />
</div>
