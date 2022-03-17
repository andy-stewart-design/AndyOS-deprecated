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
			keyframes: {
				marquee: {
					'100%': { 'transform': 'translateX(-100%)' },
				},
			},
			spacing: {
				'18': '4.5rem',
			}
		}
	},

	plugins: []
};

module.exports = config;
