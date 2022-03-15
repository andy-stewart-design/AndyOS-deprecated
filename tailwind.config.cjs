const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				space: ['Space Grotesk'],
			},
			spacing: {
				'18': '4.5rem',
			}
		}
	},

	plugins: []
};

module.exports = config;
