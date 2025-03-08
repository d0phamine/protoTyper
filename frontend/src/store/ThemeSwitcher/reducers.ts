import { CaseReducer, PayloadAction } from "@reduxjs/toolkit"

import { IThemeSwitcherState } from "@/types/features"

export const setCurrentTheme: CaseReducer<
	IThemeSwitcherState,
	PayloadAction<string>
> = (state, action) => {
	state.currentTheme = action.payload
}

export const toggleThemeSwitcherOpen: CaseReducer<IThemeSwitcherState> = (
	state,
) => {
	state.themeSwitcherOpen = !state.themeSwitcherOpen
}

export const filterThemes: CaseReducer<
	IThemeSwitcherState,
	PayloadAction<string>
> = (state, action) => {
	state.themeFilter = action.payload
}
