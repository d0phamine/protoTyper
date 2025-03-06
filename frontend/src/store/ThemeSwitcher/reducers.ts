import { CaseReducer, PayloadAction } from "@reduxjs/toolkit"

import { IThemeSwitcherState } from "@/types/features"

export const setCurrentTheme: CaseReducer<
	IThemeSwitcherState,
	PayloadAction<string>
> = (state, action) => {
	state.currentTheme = action.payload
}

