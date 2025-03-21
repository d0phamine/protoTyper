export type Lesson = {
	id: number
	name: string
	description: string
	text: string
	timing?: number
	percentage: number
	language?: string
	status: "success" | "fail" | "notchecked"
}
