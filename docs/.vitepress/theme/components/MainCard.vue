<script setup lang="ts">
import { isDark, toggleDark } from '../composables/useDark'
</script>

<template>
	<section class="mi--main-card mi--card min-h-[252px] text-center flex flex-col justify-between">
		<img
			src="/favicon.svg"
			alt="logo"
			class="mx-auto"
		>

		<div>
			<h1 class="text-xl font-medium">
				<slot />
			</h1>
			<span class="opacity-60">
				My simple components via Vue
			</span>
		</div>

		<footer class="flex justify-center gap-[8px]">
			<a
				href="https://github.com/mioe/packages"
				class="btn--tiny"
				target="_blank"
			>
				<icon-carbon:logo-github />
			</a>

			<button
				class="btn--tiny"
				@click="toggleDark()"
			>
				<icon-carbon:moon v-if="isDark" />
				<icon-carbon:sun v-else />
			</button>
		</footer>
	</section>
</template>

<style lang="sass">
.mi--main-card p
	margin: 0
</style>
