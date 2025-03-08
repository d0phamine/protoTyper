import { createSelector } from "@reduxjs/toolkit"

import { IThemeSwitcherState, Theme } from "@/types/features"

import { themeApi } from "@/api"

import { createAppSlice } from "@/store/createAppSlice"
import { RootState } from "@/store/store"

import {
	filterThemes,
	setCurrentTheme,
	toggleThemeSwitcherOpen,
} from "./reducers"

const initialState: IThemeSwitcherState = {
	themes: [],
	currentTheme: "serika_dark",
	themeSwitcherOpen: false,
	themeFilter: "",
}

export const themeSwitcherSlice = createAppSlice({
	name: "themeSwitcher",
	initialState,
	reducers: {
		setCurrentThemeAction: setCurrentTheme,
		toggleThemeSwitcherOpenAction: toggleThemeSwitcherOpen,
		themeFilterAction: filterThemes,
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

const filteredThemes = createSelector(
	[
		(state: RootState) => themeApi.endpoints.getThemes.select()(state),
		themeFilter,
	],
	(queryResult, themeFilter) =>
		queryResult.data?.filter((theme: Theme) =>
			theme.name.toLowerCase().includes(themeFilter.toLowerCase()),
		) || [],
)

export const { reducer, actions } = themeSwitcherSlice
export const themeSwitcherSelectors = {
	currentTheme,
	themeSwitcherOpen,
	themeFilter,
	filteredThemes,
}

