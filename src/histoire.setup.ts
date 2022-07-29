import './assets/sass/main.sass'

import { defineSetupVue3 } from 'histoire/client'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const setupVue3 = defineSetupVue3(({ app }) => {
	console.log('🦕 init defineSetupVue3')
})
