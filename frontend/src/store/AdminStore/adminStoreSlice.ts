import { createSelector } from "@reduxjs/toolkit"

import { IAdminStore } from "@/types/processes"

import { createAppSlice } from "@/store/createAppSlice"
import { RootState } from "@/store/store"

import { setCurrentViewEntity } from "./reducers"

const initialState: IAdminStore = {
	currentViewEntity: "users",
}

export const adminStoreSlice = createAppSlice({
	name: "adminStore",
	initialState,
	reducers: {
		setCurrentViewEntityAction: setCurrentViewEntity,
	},
})

const selectAdminStore = (state: RootState) => state.adminStore

const currentViewEntity = createSelector(
	[selectAdminStore],
	(state) => state.currentViewEntity,
)

const { reducer, actions } = adminStoreSlice

export const adminStoreSelectors = { currentViewEntity }
export const { setCurrentViewEntityAction } = actions
export default reducer
