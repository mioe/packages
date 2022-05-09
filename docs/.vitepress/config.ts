import type { UserConfig } from 'vitepress'

const config: UserConfig = {
	title: '@mioe/packages',
	description: '🐧 💻',
	lang: 'en',
	themeConfig: {
		repo: 'mioe/packages',
		docsRepo: 'mioe/packages',
		docsDir: 'docs',
		docsBranch: 'main',
	},
	head: [
		['meta', { name: 'theme-color', content: '#ffffff' }],
		['link', { rel: 'icon', href: '/favicon-32x32.png', type: 'image/png' }],
		['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
		['meta', { name: 'author', content: 'Misha Gezha' }],
		['meta', { property: 'og:title', content: '@mioe/packages' }],
		['meta', { property: 'og:image', content: 'https://mioe-packages.web.app/og.png' }],
		['meta', { property: 'og:description', content: 'My simple components via Vue' }],
		['meta', { name: 'twitter:card', content: 'summary_large_image' }],
		['meta', { name: 'twitter:creator', content: '@mioeboss' }],
		['meta', { name: 'twitter:image', content: 'https://mioe-packages.web.app/og.png' }],

		/**
		 * google fonts
		 */
		['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
		['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
		['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap' }],
	],
}

export default config
