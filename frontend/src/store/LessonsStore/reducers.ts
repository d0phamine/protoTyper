import {
	ActionReducerMapBuilder,
	CaseReducer,
	PayloadAction,
} from "@reduxjs/toolkit"

import { ILessonsStore, Lesson, LessonStep } from "@/types/processes"

import { protoTyperApi } from "@/api"

export const setLessons = (builder: ActionReducerMapBuilder<ILessonsStore>) => {
	builder.addMatcher(
		protoTyperApi.endpoints.getLessons.matchFulfilled,
		(state, action) => {
			state.lessons = action.payload as Lesson[]
		},
	)
}

export const setCurrentLesson = (
	builder: ActionReducerMapBuilder<ILessonsStore>,
) => {
	builder.addMatcher(
		protoTyperApi.endpoints.getLessonById.matchFulfilled,
		(state, action) => {
			state.currentLesson = action.payload as Lesson
		},
	)
}

export const setCurrentStep = (
	builder: ActionReducerMapBuilder<ILessonsStore>,
) => {
	builder.addMatcher(
		protoTyperApi.endpoints.getStepById.matchFulfilled,
		(state, action) => {
			state.currentStep = action.payload as LessonStep
		},
	)
}

export const setCurrentStepManually: CaseReducer<
	ILessonsStore,
	PayloadAction<LessonStep>
> = (state, action) => {
	state.currentStep = action.payload
}
