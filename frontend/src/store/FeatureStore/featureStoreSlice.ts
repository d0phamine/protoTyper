import { createSelector } from "@reduxjs/toolkit"

import { IFeatureStore } from "@/types/features"

import { createAppSlice } from "@/store/createAppSlice"
import { RootState } from "@/store/store"

import { toggleLessonsDrawerOpen, toggleThemeSwitcherOpen } from "./reducers"

const initialState: IFeatureStore = {
	lessonsDrawerOpen: false,
	themeSwitcherOpen: false,
}

export const featureStoreSlice = createAppSlice({
	name: "featureStore",
	initialState,
	reducers: {
		toggleLessonsDrawerOpenAction: toggleLessonsDrawerOpen,
		toggleThemeSwitcherOpenAction: toggleThemeSwitcherOpen,
	},
})

const selectFeatureStore = (state: RootState) => state.featureStore

const lessonsDrawerOpen = createSelector(
	[selectFeatureStore],
	(state) => state.lessonsDrawerOpen,
)

const themeSwitcherOpen = createSelector(
	[selectFeatureStore],
	(state) => state.themeSwitcherOpen,
)

const { reducer, actions } = featureStoreSlice
export const { toggleLessonsDrawerOpenAction, toggleThemeSwitcherOpenAction } =
	actions
export const featureStoreSelectors = { lessonsDrawerOpen, themeSwitcherOpen }
export default reducer
