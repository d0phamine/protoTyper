import {
	ActionReducerMapBuilder,
	CaseReducer,
	PayloadAction,
} from "@reduxjs/toolkit"

import { ILessonsStore, Lesson, LessonStep } from "@/types/processes"

import { protoTyperApi } from "@/api"

import { setStepResultAction } from "./lessonsStoreSlice"

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
export const goToNextStepText: CaseReducer<
	ILessonsStore,
	PayloadAction<string[]>
> = (state, action) => {
	if (state.currentStepText < action.payload.length) {
		state.currentStepText += 1
	}
}

export const goToStep: CaseReducer<
	ILessonsStore,
	PayloadAction<{
		stepIndex: number
		steps: LessonStep[]
		funcType: "next" | "curr"
	}>
> = (state, action) => {
	if (action.payload.stepIndex < action.payload.steps.length) {
		if (action.payload.funcType === "next") {
			state.currentStepIndex += 1
		}
		if (action.payload.funcType === "curr") {
			state.currentStepIndex = action.payload.stepIndex
		}
	}
}

export const currentStepTextsToDefault: CaseReducer<ILessonsStore> = (
	state,
) => {
	state.currentStepText = 0
}

export const setStepResult = (
	builder: ActionReducerMapBuilder<ILessonsStore>,
) => {
	builder.addCase(setStepResultAction.fulfilled, (state, action) => {
		state.stepResult = action.payload
	})
}

export const stepResultToDefault: CaseReducer<ILessonsStore> = (state) => {
	state.stepResult = null
}
