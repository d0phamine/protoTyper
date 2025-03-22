import { createSelector } from "@reduxjs/toolkit"

import { ILessonsStore } from "@/types/features"

import { createAppSlice } from "@/store/createAppSlice"
import { RootState } from "@/store/store"

import { setCurrentLesson, setLessons } from "./reducers"

const initialState: ILessonsStore = {
	lessons: [],
	currentLesson: null,
}

export const lessonsStoreSlice = createAppSlice({
	name: "lessonsStore",
	initialState,
	reducers: {},
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

const { reducer } = lessonsStoreSlice
export const lessonsStoreSelectors = { currentLesson }
export default reducer
