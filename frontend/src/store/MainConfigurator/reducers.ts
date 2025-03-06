import { CaseReducer, PayloadAction } from "@reduxjs/toolkit"

import { IMainConfiguratorState, TextMode } from "@/types/features"

export const setWordMode: CaseReducer<
	IMainConfiguratorState,
	PayloadAction<TextMode>
> = (state, action) => {
	state.textMode = action.payload
}

