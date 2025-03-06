import { IThemeSwitcherState } from "@/types/features"

import { createAppSlice } from "@/store/createAppSlice"

import { setCurrentTheme } from "./reducers"

const initialState: IThemeSwitcherState = {
	themes: [],
	currentTheme: "serika_dark",
}

export const themeSwitcherSlice = createAppSlice({
	name: "themeSwitcher",
	initialState,
	reducers: {
		setCurrentThemeAction: setCurrentTheme,
	},
})

export const { reducer, actions } = themeSwitcherSlice

