import { CaseReducer } from "@reduxjs/toolkit"

import { IFeatureStore } from "@/types/features"

export const toggleThemeSwitcherOpen: CaseReducer<IFeatureStore> = (state) => {
	state.themeSwitcherOpen = !state.themeSwitcherOpen
}

export const toggleLessonsDrawerOpen: CaseReducer<IFeatureStore> = (state) => {
	state.lessonsDrawerOpen = !state.lessonsDrawerOpen
}

