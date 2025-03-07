import { createSelector } from "@reduxjs/toolkit"

import { IMainConfiguratorState } from "@/types/features"

import { createAppSlice } from "@/store/createAppSlice"
import { RootState } from "@/store/store"

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

/**
 * Селекторы для mainConfigurator
 *
 * @param {RootState} state - Глобальное состояние Redux.
 * @returns {selectors} Мемоизированные селекторы.
 */

const selectMainConfigurator = (state: RootState) => state.mainConfigurator

const selectWordMode = createSelector(
	[selectMainConfigurator],
	(state) => state.textMode,
)

const { reducer, actions } = mainConfiguratorSlice
export const { setWordModeAction } = actions
export const selectors = { selectWordMode }
export default reducer

