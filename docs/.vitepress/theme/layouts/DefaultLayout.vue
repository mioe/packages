<script setup lang="ts">
import { computed } from 'vue'
import { useAppStore } from '../stores/app'
const appStore = useAppStore()

const dd = computed(() => appStore.greetings)

defineProps({
	home: {
		type: Boolean,
		default: false,
	},
})
</script>

<template>
	<div>
		<Content /><!-- this is where markdown content will be rendered -->
	</div>
</template>
