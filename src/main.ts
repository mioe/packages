import { createApp } from 'vue'
import App from './App.vue'

/**
 * Styles
 */
import 'virtual:windi.css'
import '@/@packages/windi-themes/oh-my-project/assets/main.sass'

/**
 * init app
 */
createApp(App)
	.mount('#app')
