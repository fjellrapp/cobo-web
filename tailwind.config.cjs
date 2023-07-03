const { fontFamily } = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		fontFamily: {
			primary: ['Mona Sans', ...fontFamily.sans]
		},
		extend: {
			gridTemplateColumns: {
				'menu-default': 'minmax(80px, 100px) 1fr'
			},
			fontFamily: {
				primary: ['Mona Sans', ...fontFamily.sans],
				verdana: ['Verdana, Geneva, Tahoma, sans-serif']
			},
			fontSize: {
				h1: '38px',
				h2: '22px',
				h3: '17px',
				h4: '13px',
				body: '17px',
				bodyLg: '24px',
				buttonDefault: '17px',
				buttonMedium: '20px',
				buttonLarge: '24px',
				'2xs': '0.65em'
			},
			lineHeight: {
				default: '24px'
			},
			letterSpacing: {
				xl: '38px',
				lg: '32px',
				md: '24px',
				sm: '20px'
			},
			width: {
				default: '768px'
			},
			gap: {
				'4xs': '4px',
				'3xs': '5px',
				'2xs': '8px',
				xs: '16px',
				s: '24px',
				md: '32px',
				lg: '48px',
				xl: '64px'
			},
			backgroundColor: {
				primary: 'rgb(249,247,246)'
			},
			colors: {
				primaryBg: 'rgb(249,247,246)',
				darkBlue: 'rgb(43, 47, 62)',
				darkBlue50opacity: 'rgba(43, 47, 62, 0.5)',
				darkBlue75opacity: 'rgba(43, 47, 62, 0.75)',
				darkBlue90opacity: 'rgba(43, 47, 62, 0.90)',
				red: 'rgb(235,85,64)',
				redDarker: 'rgb(235, 70, 64)',
				red75opacity: 'rgba(235,85,64,0.75)',
				red50opacity: 'rgba(235,85,64,0.5)',
				lightBlue: 'rgb(123,210,224)',
				lightBlue50opacity: 'rgba(123,210,224, 0.5)',
				lightBlue75opacity: 'rgba(123,210,224, 0.75)',
				pink: 'rgb(254, 152, 201)',
				pink50opacity: 'rgba(254, 152, 201, 0.5)',
				pink75opacity: 'rgba(254, 152, 201, 0.75)',
				green: 'rgb(70,194,164)',
				green50opacity: 'rgba(70,194,164, 0.5)',
				green75opacity: 'rgba(70,194,164, 0.75)',
				yellow: 'rgb(255,152,26)',
				yellow50opacity: 'rgb(255,152,26, 0.5)',
				yellow75opacity: 'rgb(255,152,26, 0.75)',
				gray: 'rgb(240,240,240)'
			}
		}
	},
	plugins: []
};
