import { createSelector } from "@reduxjs/toolkit"

import { IThemeSwitcherState } from "@/types/features"

import { createAppSlice } from "@/store/createAppSlice"
import { RootState } from "@/store/store"

import { setCurrentTheme, toggleThemeSwitcherOpen } from "./reducers"

const initialState: IThemeSwitcherState = {
	themes: [],
	currentTheme: "serika_dark",
	themeSwitcherOpen: false,
}

export const themeSwitcherSlice = createAppSlice({
	name: "themeSwitcher",
	initialState,
	reducers: {
		setCurrentThemeAction: setCurrentTheme,
		toggleThemeSwitcherOpenAction: toggleThemeSwitcherOpen,
	},
})

/**
 * Селекторы для themeSwitcher
 *
 * @param {RootState} state - Глобальное состояние Redux.
 * @returns {selectors} Мемоизированные селекторы.
 */

const ThemeSwitcherSelector = (state: RootState) => state.themeSwitcher

export const currentTheme = createSelector(
	[ThemeSwitcherSelector],
	(state) => state.currentTheme,
)

export const themeSwitcherOpen = createSelector(
	[ThemeSwitcherSelector],
	(state) => state.themeSwitcherOpen,
)

export const { reducer, actions } = themeSwitcherSlice
export const themeSwitcherSelectors = { currentTheme, themeSwitcherOpen }

