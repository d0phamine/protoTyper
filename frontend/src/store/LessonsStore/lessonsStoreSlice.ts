import { createSelector } from "@reduxjs/toolkit"

import { ILessonsStore } from "@/types/processes"

import { createAppSlice } from "@/store/createAppSlice"
import { RootState } from "@/store/store"

import { setCurrentLesson, setCurrentStep, setLessons } from "./reducers"

const initialState: ILessonsStore = {
	lessons: [],
	currentLesson: null,
	currentStep: null,
}

export const lessonsStoreSlice = createAppSlice({
	name: "lessonsStore",
	initialState,
	reducers: {
		setCurrentStep: setCurrentStep,
	},
	extraReducers: (builder) => {
		setLessons(builder)
		setCurrentLesson(builder)
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

const { reducer } = lessonsStoreSlice
export const lessonsStoreSelectors = { currentLesson, currentStep }
export default reducer
