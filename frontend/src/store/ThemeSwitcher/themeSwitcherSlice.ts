import { createSelector } from "@reduxjs/toolkit"

import { IThemeSwitcherState } from "@/types/features"

import { createAppSlice } from "@/store/createAppSlice"
import { RootState } from "@/store/store"

import {
	filterThemes,
	initCurrentTheme,
	setCurrentTheme,
	toggleThemeSwitcherOpen,
	setActiveThemeIndex
} from "./reducers"

const initialState: IThemeSwitcherState = {
	themes: [],
	currentTheme: "serika_dark",
	themeSwitcherOpen: false,
	themeFilter: "",
	activeThemeIndex: null,
}

export const themeSwitcherSlice = createAppSlice({
	name: "themeSwitcher",
	initialState,
	reducers: {
		setCurrentThemeAction: setCurrentTheme,
		toggleThemeSwitcherOpenAction: toggleThemeSwitcherOpen,
		themeFilterAction: filterThemes,
		initCurrentThemeAction: initCurrentTheme,
		setActiveThemeIndexAction: setActiveThemeIndex
	},
})

/**
 * Селекторы для themeSwitcher
 *
 * @param {RootState} state - Глобальное состояние Redux.
 * @returns {selectors} Мемоизированные селекторы.
 */

const ThemeSwitcherSelector = (state: RootState) => state.themeSwitcher

const currentTheme = createSelector(
	[ThemeSwitcherSelector],
	(state) => state.currentTheme,
)

const themeSwitcherOpen = createSelector(
	[ThemeSwitcherSelector],
	(state) => state.themeSwitcherOpen,
)

const themeFilter = createSelector(
	[ThemeSwitcherSelector],
	(state) => state.themeFilter,
)

const activeThemeIndex = createSelector(
	[ThemeSwitcherSelector],
	(state) => state.activeThemeIndex
)

export const { reducer, actions } = themeSwitcherSlice
export const themeSwitcherSelectors = {
	currentTheme,
	themeSwitcherOpen,
	themeFilter,
	activeThemeIndex
}

