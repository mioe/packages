<script setup lang="ts">
import { useRoute } from 'vitepress'
import { computed } from 'vue'
import { routes } from '../../routes'

import { StarportCarrier } from 'vue-starport'

import MainPageLayout from './layouts/MainPageLayout.vue'
import DefaultLayout from './layouts/DefaultLayout.vue'

const route = useRoute()
const isMainPage = computed(() => route.path === '/')
const routeName = computed(() => {
	const pathWithoutHtml = route.path.substring(0, route.path.length - 5)
	const fRoute = routes.find((r) => r.href === pathWithoutHtml)
	if (fRoute) {
		return fRoute.name
	}
	return pathWithoutHtml || 'Unknown'
})
</script>

<template>
	<div class="relative w-full min-h-screen">
		<StarportCarrier>
			<Transition name="page-fade">
				<MainPageLayout
					v-if="isMainPage"
					class="absolute left-0 right-0 w-full"
				>
					<template #default>
						<Content /><!-- this is where markdown content will be rendered -->
					</template>
				</MainPageLayout>

				<DefaultLayout
					v-else
					:route-name="routeName"
					class="absolute left-0 right-0 w-full"
				>
					<template #default>
						<Content />
					</template>
				</DefaultLayout>
			</Transition>
		</StarportCarrier>
	</div>
</template>
