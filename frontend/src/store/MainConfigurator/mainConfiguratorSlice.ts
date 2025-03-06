import { IMainConfiguratorState } from "@/types/features"

import { createAppSlice } from "@/store/createAppSlice"

import { setWordMode } from "./reducers"

const initialState: IMainConfiguratorState = {
	textMode: "word",
}

export const mainConfiguratorSlice = createAppSlice({
	name: "mainConfigurator",
	initialState,
	reducers: {
		setWordModeAction: setWordMode,
	},
})

export const { reducer, actions } = mainConfiguratorSlice
export const { setWordModeAction } = actions
export default reducer

