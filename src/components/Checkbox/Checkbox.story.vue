<script setup lang="ts">
import 'virtual:windi.css'
import '../../assets/sass/main.sass'
import Checkbox from './Checkbox.vue'
</script>

<template>
	<Story title="MyStory">
		<Variant title="MyVariant 1">
			<Checkbox argument="hello" />
		</Variant>
		<Variant title="MyVariant 2">
			<Checkbox>
				<span class="ml-[20px]">
					dd
				</span>
			</Checkbox>
		</Variant>
	</Story>
</template>
