import { createApp } from 'vue'
import App from './App.vue'

/**
 * Styles
 */
import 'virtual:windi.css'
import '@mioe/packages/windi-themes/oh-my-project/assets/sass/main.sass'

/**
 * init app
 */
createApp(App)
	.mount('#app')
