import { defineConfig } from 'vite'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig(() => {
	return {
		plugins: [
			// https://github.com/antfu/vite-plugin-windicss
			WindiCSS(),
		],
	}
})
