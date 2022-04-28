import { createApp } from 'vue'
import App from './App.vue'

/**
 * Styles
 */
import 'virtual:windi.css'
import '@/assets/sass/main.sass'

/**
 * init app
 */
createApp(App)
	.mount('#app')
