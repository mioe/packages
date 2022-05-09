<script setup>
import { Starport } from 'vue-starport'
import Demo from '../../../demo/Demo.vue'
import { isDark, toggleDark } from '../composables/useDark'

defineProps({
	routeName: {
		type: String,
		default: null,
	},
})
</script>

<template>
	<div class="container-default py-[16px] flex flex-col gap-[16px]">
		<div class="mi--card">
			<header class="flex flex-wrap justify-between">
				<a
					href="/"
					class="btn pl-[3px]"
				>
					<icon-carbon:chevron-left
						class="text-$primary"
					/>
					<span class="ml-[6px]">
						Back
					</span>
				</a>

				<button
					class="btn"
					@click="toggleDark()"
				>
					<icon-carbon:moon v-if="isDark" />
					<icon-carbon:sun v-else />
				</button>
			</header>
		</div>

		<div class="mi--card">
			<Starport
				:port="routeName"
				style="height: 200px;"
			>
				<Demo :name="routeName" />
			</Starport>
		</div>

		<main class="mi--card">
			<slot />
		</main>
	</div>
</template>
