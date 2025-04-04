export interface ILessonsStore {
	lessons: Lesson[] | null
	currentLesson: Lesson | null
	lessonResult: LessonResult | null
	currentStep: LessonStep | null
	currentStepText: number
	currentStepIndex: number
	stepResult: LessonStepResult | null
}

export interface Lesson {
	id: number
	name: string
	description: string
	language: string
	result: LessonResult
	steps: LessonStep[]
	status: "success" | "fail" | "notchecked" | "process"
}

export type LessonStep = {
	id: number
	name: string
	description: string
	texts: string[]
	result: LessonStepResult
}

export type LessonResult = {
	percentage: number
	status: "success" | "fail" | "notchecked" | "process"
}

export type LessonStepResult = {
	percentage: number
	status: "success" | "fail" | "notchecked" | "process"
}
