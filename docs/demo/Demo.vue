<script setup lang="ts">
import { computed } from 'vue'
import ButtonsDemo from './buttons/_demo.vue'
import CheckboxDemo from './checkbox/_demo.vue'
import RadioDemo from './radio/_demo.vue'

const props = defineProps({
	name: {
		type: String,
		default: null,
	},
})

const demos = {
	'Buttons': ButtonsDemo,
	'Checkbox': CheckboxDemo,
	'Radio': RadioDemo,
}

const currentDemo = computed(() => {
	// @ts-ignore
	return demos[props.name] || demos['Checkbox']
})
</script>

<template>
	<section
		v-if="currentDemo"
		class="mi--demo"
	>
		<Component :is="currentDemo" />
	</section>
</template>

<style scoped lang="sass">
.mi--demo
	height: 100%
	display: flex
	flex-direction: column
	align-items: center
	justify-content: center
</style>
