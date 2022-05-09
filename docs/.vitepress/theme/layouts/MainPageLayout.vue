<script setup>
import { Starport } from 'vue-starport'
import Demo from '../../../demo/Demo.vue'
import { routes } from '../../../routes'
</script>

<template>
	<div class="mi--wrapper">
		<main class="mi--grid">
			<div class="mi--card">
				<slot />
			</div>

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
		</main>
	</div>
</template>
