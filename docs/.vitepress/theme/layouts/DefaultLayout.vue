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
	<div class="container-default">
		<Starport
			:port="routeName"
			style="height: 200px;"
		>
			<Demo :name="routeName" />
		</Starport>

		Default
		<slot />
		<a href="/">
			ff
		</a>
	</div>
</template>
