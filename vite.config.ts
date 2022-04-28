import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig(() => {
	return {
		resolve: {
			alias: {
				'@/': `${resolve(__dirname, 'src')}/`,
				'@mioe/packages': `${resolve(__dirname, 'src/@packages')}/`,
			},
		},
		plugins: [
			vue(),

			// https://github.com/antfu/vite-plugin-windicss
			WindiCSS(),
		],
	}
})
