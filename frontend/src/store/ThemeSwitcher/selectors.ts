import { createSelector } from "@reduxjs/toolkit"

import { RootState } from "@/store/store"

const selectThemeSwitcher = (state: RootState) => state.themeSwitcher

export const selectCurrentTheme = createSelector(
	[selectThemeSwitcher],
	(state) => state.currentTheme,
)
