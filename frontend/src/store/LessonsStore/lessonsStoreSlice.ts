import { createSelector } from "@reduxjs/toolkit"

import { ILessonsStore } from "@/types/processes"

import { createAppSlice } from "@/store/createAppSlice"
import { RootState } from "@/store/store"

import {
	currentStepTextsToDefault,
	goToNextStepText,
	goToStep,
	setCurrentLesson,
	setCurrentStep,
	setCurrentStepManually,
	setLessons,
	setStepResult,
	stepResultToDefault,
} from "./reducers"

const initialState: ILessonsStore = {
	lessons: [],
	currentLesson: null,
	lessonResult: null,
	currentStep: null,
	currentStepText: 0,
	currentStepIndex: 0,
	stepResult: null,
}

export const lessonsStoreSlice = createAppSlice({
	name: "lessonsStore",
	initialState,
	reducers: {
		setCurrentStepManuallyAction: setCurrentStepManually,
		goToStepAction: goToStep,
		setStepResultAction: setStepResult,
		stepResultToDefaultAction: stepResultToDefault,
		goToNextStepTextAction: goToNextStepText,
		currentStepTextsToDefaultAction: currentStepTextsToDefault,
	},
	extraReducers: (builder) => {
		setLessons(builder)
		setCurrentLesson(builder)
		setCurrentStep(builder)
	},
})

const selectLessonsStore = (state: RootState) => state.lessonsStore

const currentLesson = createSelector(
	[selectLessonsStore],
	(state) => state.currentLesson,
)

const currentStep = createSelector(
	[selectLessonsStore],
	(state) => state.currentStep,
)

const currentStepIndex = createSelector(
	[selectLessonsStore],
	(state) => state.currentStepIndex,
)

const currentStepText = createSelector(
	[selectLessonsStore],
	(state) => state.currentStepText,
)

const currentStepResult = createSelector(
	[selectLessonsStore],
	(state) => state.stepResult,
)

const { reducer, actions } = lessonsStoreSlice
export const lessonsStoreSelectors = {
	currentLesson,
	currentStep,
	currentStepIndex,
	currentStepText,
	currentStepResult,
}
export const {
	setCurrentStepManuallyAction,
	goToStepAction,
	goToNextStepTextAction,
	currentStepTextsToDefaultAction,
	setStepResultAction,
	stepResultToDefaultAction,
} = actions
export default reducer
