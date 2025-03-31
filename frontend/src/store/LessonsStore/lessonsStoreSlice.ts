import { createSelector } from "@reduxjs/toolkit"

import { ILessonsStore } from "@/types/processes"

import { createAppSlice } from "@/store/createAppSlice"
import { RootState } from "@/store/store"

import {
	currentStepTextsToDefault,
	goToStep,
	goToNextStepText,
	setCurrentLesson,
	setCurrentStep,
	setCurrentStepManually,
	setLessons,
} from "./reducers"

const initialState: ILessonsStore = {
	lessons: [],
	currentLesson: null,
	currentStep: null,
	currentStepText: 0,
	currentStepIndex: 0,
}

export const lessonsStoreSlice = createAppSlice({
	name: "lessonsStore",
	initialState,
	reducers: {
		setCurrentStepManuallyAction: setCurrentStepManually,
		goToStepAction: goToStep,
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

const { reducer, actions } = lessonsStoreSlice
export const lessonsStoreSelectors = {
	currentLesson,
	currentStep,
	currentStepIndex,
	currentStepText,
}
export const {
	setCurrentStepManuallyAction,
	goToStepAction,
	goToNextStepTextAction,
	currentStepTextsToDefaultAction,
} = actions
export default reducer
