import { defineStore } from 'pinia'

export const useAppStore = defineStore('app-store', {
	state: (): any => ({
		name: '',
		hello: 'hello',
	}),
	getters: {
		greetings(): string { return `${this.hello} ${this.name}` },
	},
	actions: {
		changeName(newName: string): void {
			this.name = newName
		},
	},
})
