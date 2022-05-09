<script setup lang="ts">
import {
	Dropdown,
} from '../../../src/main'
</script>

<template>
	<div>
		<Dropdown>
			<template #default="{ toggle }">
				<button
					class="btn w-full"
					@click="toggle"
				>
					Click me
				</button>
			</template>
			<template #menu="scope">
				<p class="whitespace-nowrap">
					<span class="text-$primary">local position: </span>
					{{ scope.localPosition.positionX }} {{ scope.localPosition.positionY }}
				</p>
			</template>
		</Dropdown>
	</div>
</template>
