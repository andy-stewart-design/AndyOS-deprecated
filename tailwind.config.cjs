const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			'white': '#ffffff',
			'black': '#0d0d0e',
			'blue': '#143ff5',
			'neon': '#d3fe04',
			'gray': {
				100: '#f4f4f5',
				200: '#e4e4e7',
				300: '#d4d4d8',
				700: '#4a4a4c',
				800: '#323234',
				900: '#1b1b1d',
			},
			'orange': {
				400: '#fb923c'
			},
			'rose': {
				700: '#be123c'
			}
		},
		fontFamily: {
			'sans': ['Andy Sans', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', "Helvetica Neue", 'Arial', "Noto Sans", 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"
			],
			'vf': ['Aeonik VF', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', "Helvetica Neue", 'Arial', "Noto Sans", 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"
			],
			'mono': ['Aeonik Fono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'],
		},
		fontSize: {
			'xs': '.75rem',
			'sm': '.875rem',
			'base': '1rem',
			'lg': '1.125rem',
			'xl': '1.25rem',
			'2xl': '1.5rem',
			'3xl': '1.875rem',
			'4xl': '2.25rem',
			'5xl': ['3rem', '1.05'],
			'6xl': '3.75rem',
			'7xl': '4.5rem',
			'8xl': '6rem',
			'9xl': '8rem',
		},
		letterSpacing: {
			tightest: '-.0375em',
			tighter: '-.025em',
			tight: '-.0125em',
			normal: '0',
			wide: '.025em',
			wider: '.05em',
			widest: '.1em',
		},
		screens: {
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1440px',
		},
		extend: {
			animation: {
				'marquee': 'marquee linear infinite',
				'rotate': 'rotate linear infinite',
			},
			aspectRatio: {
				'film': '3 / 2',
				'common': '5 / 4',
			},
			gridTemplateColumns: {
				'project-s': 'minmax(auto, 2fr) minmax(auto, 5fr)',
				'project-l': 'auto repeat(2, minmax(0, 1fr)) auto',
			},
			keyframes: {
				marquee: {
					'100%': { 'transform': 'translateX(-100%)' },
				},
				rotate: {
					'100%': { 'transform': 'rotate(360deg)' },
				},
			},
			lineHeight: {
				'tighter': '1.2',
				'tightest': '1.1',
			},
			screens: {
				'hover-hover': { 'raw': '(hover: hover)' },
			},
			spacing: {
				'18': '4.5rem',
			},
			transitionProperty: {
				'ot': 'opacity, transform',
			},
			transitionTimingFunction: {
				'in-out-cubic': 'cubic-bezier(0.65, 0, 0.35, 1)',
				'in-cubic': 'cubic-bezier(0.32, 0, 0.67, 0)',
				'out-cubic': 'cubic-bezier(0.33, 1, 0.68, 1)',
				'out-quint': 'cubic-bezier(0.22, 1, 0.36, 1)',
			},
		}
	},

	plugins: []
};

module.exports = config;
