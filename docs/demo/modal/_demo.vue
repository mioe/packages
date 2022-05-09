<script setup lang="ts">
import { ref } from 'vue'
import {
	Modal,
} from '../../../src/main'

const isShowModal = ref(false)
const isShowBigModal = ref(false)
</script>

<template>
	<div>
		<button
			class="btn mr-[8px]"
			@click="isShowModal = true"
		>
			Modal
		</button>
		<button
			class="btn"
			@click="isShowBigModal = true"
		>
			Big Modal
		</button>
	</div>

	<Modal v-model="isShowModal">
		<template #default>
			<div class="max-w-[600px]">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dolor, quod magnam ex enim maiores hic, id doloremque asperiores magni consequuntur eligendi totam, aliquam tenetur deserunt iusto? Quia, consectetur doloremque!
				</p>
			</div>
		</template>
	</Modal>

	<Modal v-model="isShowBigModal">
		<template #default>
			<div class="max-w-[600px]">
				<p
					v-for="i in 50"
					:key="i"
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dolor, quod magnam ex enim maiores hic, id doloremque asperiores magni consequuntur eligendi totam, aliquam tenetur deserunt iusto? Quia, consectetur doloremque!
				</p>
			</div>
		</template>
	</Modal>
</template>
