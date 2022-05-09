import { defineConfig } from 'vite'
import WindiCSS from 'vite-plugin-windicss'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

// https://vitejs.dev/config/
export default defineConfig(() => {
	return {
		plugins: [
			// https://github.com/antfu/vite-plugin-windicss
			WindiCSS(),

			// https://github.com/antfu/unplugin-vue-components
			Components({
				// auto import icons
				resolvers: [
					// https://github.com/antfu/unplugin-icons
					IconsResolver({
						prefix: 'icon',
					}),
				],
				dts: 'components.d.ts',
			}),

			// https://github.com/antfu/unplugin-icons
			Icons(),
		],
	}
})
