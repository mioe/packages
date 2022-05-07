<script setup>
import { Starport } from 'vue-starport'
import Demo from '../../../demo/Demo.vue'
import { routes } from '../../../routes'
</script>

<template>
	<div class="mi--wrapper">
		<main class="mi--grid">
			<div
				v-for="(route, idx) in routes"
				:key="idx"
				class="mi--card"
			>
				<Starport
					:port="route.name"
					style="height: 200px"
				>
					<Demo :name="route.name" />
				</Starport>

				<a
					:href="route.href"
				>
					{{ route.name }}
				</a>
			</div>

			<slot />
		</main>
	</div>
</template>

<style scoped lang="sass">
.mi--wrapper
	position: relative
	min-height: 100vh
	padding: 16px

.mi--grid
	display: grid
	grid-template-columns: repeat(auto-fill, minmax(280px,1fr))
	gap: 16px
</style>
