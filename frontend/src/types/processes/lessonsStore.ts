export interface ILessonsStore {
	lessons: Lesson[] | null
	currentLesson: Lesson | null
	currentStep: LessonStep | null
}

export interface Lesson {
	id: number
	name: string
	description: string
	language: string
	result: LessonResult
	steps: LessonStep[]
	status: "success" | "fail" | "notchecked"
}

export type LessonStep = {
	id: number
	name: string
	description: string
	texts: string[]
	result: LessonStepResult
}

export type LessonResult = {
	id: number
	lesson_id: number
	user_id: number
	percentage: number
	status: "success" | "fail" | "notchecked"
}

export type LessonStepResult = {
	id: number
	lesson_step_id: number,
	user_id: number
	percentage: number
	status: "success" | "fail" | "notchecked"
}
