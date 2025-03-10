import { CaseReducer, PayloadAction } from "@reduxjs/toolkit"

import { IThemeSwitcherState } from "@/types/features"

export const toggleThemeSwitcherOpen: CaseReducer<IThemeSwitcherState> = (
	state,
) => {
	state.themeSwitcherOpen = !state.themeSwitcherOpen
}

export const initCurrentTheme: CaseReducer<IThemeSwitcherState> = (state) => {
	if (localStorage.getItem("theme")) {
		state.currentTheme = localStorage.getItem("theme") || "serika_dark"
	}
}

export const setCurrentTheme: CaseReducer<
	IThemeSwitcherState,
	PayloadAction<string>
> = (state, action) => {
	state.currentTheme = action.payload
	localStorage.setItem("theme", action.payload)
}

export const setActiveThemeIndex: CaseReducer<
	IThemeSwitcherState,
	PayloadAction<number>
> = (state, action) => {
	state.activeThemeIndex = action.payload
}

export const filterThemes: CaseReducer<
	IThemeSwitcherState,
	PayloadAction<string>
> = (state, action) => {
	state.themeFilter = action.payload
}

