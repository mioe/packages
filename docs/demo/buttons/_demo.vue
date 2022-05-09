
<template>
	<div class="flex gap-[16px] justify-center flex-wrap max-w-[269px]">
		<div>
			<button class="btn">
				Default
			</button>
		</div>
		<div>
			<button class="btn--tiny">
				Default Tin
			</button>
		</div>
		<div>
			<button class="btn-primary">
				Primary
			</button>
		</div>
		<div>
			<button class="btn-primary--tiny">
				Primary Tiny
			</button>
		</div>
		<div>
			<button class="btn--tiny">
				<icon-carbon:trash-can />
			</button>
		</div>
		<div>
			<button class="btn-primary">
				🦊
			</button>
		</div>
		<div>
			<button class="btn">
				🦕
			</button>
		</div>
		<div>
			<button
				class="btn-primary--tiny px-[40px] bg-red-800"
				disabled
			>
				Custom && Disabled
			</button>
		</div>
	</div>
</template>
