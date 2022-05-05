import { resolve } from 'path'
import { defineConfig } from 'vite'
import WindiCSS from 'vite-plugin-windicss'

export default defineConfig(() => {
	return {
		resolve: {
			alias: {
				'@/': `${resolve(__dirname)}/`,
				'@mioe/packages': `${resolve(__dirname)}/../src/main.ts`,
			},
		},
		plugins: [
			// https://github.com/antfu/vite-plugin-windicss
			WindiCSS(),
		],
	}
})
