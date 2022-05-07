<script setup>
import { Starport } from 'vue-starport'
import Demo from '../../../demo/Demo.vue'

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
			<a href="/">
				back
			</a>
		</div>

		<div class="mi--card">
			<Starport
				:port="routeName"
				style="height: 200px;"
			>
				<Demo :name="routeName" />
			</Starport>
		</div>

		<div class="mi--card">
			<slot />
		</div>
	</div>
</template>
