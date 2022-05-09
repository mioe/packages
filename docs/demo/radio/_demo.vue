<script setup lang="ts">
import { ref } from 'vue'
import { FRUITS } from '../lorem'

import {
	Radio,
} from '../../../src/main'

const selectedFruit = ref(FRUITS[4])
</script>

<template>
	<div class="text-center">
		<template
			v-for="(fruit, idx) in FRUITS"
			:key="fruit"
		>
			<Radio
				v-model="selectedFruit"
				:value="fruit"
			>
				{{ fruit }}
			</Radio>
			<span
				v-if="idx !== FRUITS.length - 1"
				class="ml-[16px]"
			/>
		</template>
		<div>
			Selected: {{ selectedFruit }}
		</div>
	</div>
</template>
