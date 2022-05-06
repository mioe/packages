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
					style="height: 200px; position: relative;"
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
	background-color: var(--secondary)
	padding: 16px

.mi--grid
	display: grid
	grid-template-columns: repeat(auto-fill, minmax(280px,1fr))
	gap: 16px

.mi--card
	position: relative
	background-color: var(--document)
	border-radius: 8px
	box-shadow: 0 0 15px rgba(0,0,0,.05)
	padding: 16px
</style>
