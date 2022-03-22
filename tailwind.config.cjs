const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		fontFamily: {
			'sans': ['Space Grotesk', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', "Helvetica Neue", 'Arial', "Noto Sans", 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"
			]
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			'white': '#ffffff',
			'black': '#0d0d0e',
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
		extend: {
			animation: {
				'marquee': 'marquee linear infinite',
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
