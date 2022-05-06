import { defineConfig } from 'vite-plugin-windicss'
import plugin from 'windicss/plugin'

import OhMyProject from '../src/assets/windi-themes/oh-my-project'

export default defineConfig({
	darkMode: 'class', // or 'media' or 'class'
	extract: {
		include: [
			'.vitepress/theme/**/*.vue',
			'.vitepress/theme/**/*.sass',
			'demo/**/*.vue',
			'demo/**/*.sass',
			'src/**/*.md',
		],
	},
	theme: {
		screens: OhMyProject.screens,
	},
	plugins: [
		plugin(({ addComponents }) => {
			OhMyProject.components.forEach(component => {
				addComponents(component)
			})
		}),
	],
})
