import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
	darkMode: 'class', // or 'media' or 'class'
	extract: {
		include: [
			'.vitepress/theme/**/*.vue',
			'.vitepress/theme/**/*.sass',
			'src/**/*.vue',
			'src/**/*.sass',
		],
	},
	plugins: [],
})
