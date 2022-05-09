<script setup lang="ts">
import { ref } from 'vue'
import { FRUITS } from '../lorem'

import {
	Checkbox,
} from '../../../src/main'

const selectedFruits = ref([
	FRUITS[4],
	FRUITS[7],
	FRUITS[8],
])
</script>

<template>
	<div class="text-center">
		<template
			v-for="(fruit, idx) in FRUITS"
			:key="fruit"
		>
			<Checkbox
				v-model="selectedFruits"
				:value="fruit"
			>
				{{ fruit }}
			</Checkbox>
			<span
				v-if="idx !== FRUITS.length - 1"
				class="ml-[16px]"
			/>
		</template>
		<div>
			Selected: [{{ selectedFruits.join(', ') }}]
		</div>
	</div>
</template>
