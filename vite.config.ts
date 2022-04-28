import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig(() => {
	console.log('🦕 vite.config.ts')

	return {
		resolve: {
			alias: {
				'@/': `${resolve(__dirname, 'src')}/`,
			},
		},
		plugins: [
			vue(),

			// https://github.com/antfu/vite-plugin-windicss
			WindiCSS(),
		],
		build: {
			lib: {
				entry: `${resolve(__dirname, 'src')}/packages.ts`,
				name: 'packages',
			},
			rollupOptions: {
				// make sure to externalize deps that shouldn't be bundled
				// into your library
				external: ['vue'],
				output: {
					// Provide global variables to use in the UMD build
					// for externalized deps
					globals: {
						vue: 'Vue',
					},
				},
			},
		},
	}
})
