import { createSelector } from "@reduxjs/toolkit"

import { IAuthStore } from "@/types/processes"

import { createAppSlice } from "@/store/createAppSlice"
import { RootState } from "@/store/store"

import { initAuth, setToken } from "./reducers"

const initialState: IAuthStore = {
	user: null,
	authToken: null,
	isAuth: false,
}

export const authStoreSlice = createAppSlice({
	name: "authStore",
	initialState,
	reducers: {
		initAuthAction: initAuth,
	},
	extraReducers: (builder) => {
		setToken(builder)
	},
})

const selectAuthStore = (state: RootState) => state.authStore

const currentUser = createSelector([selectAuthStore], (state) => state.user)

const { reducer, actions } = authStoreSlice
export const { initAuthAction } = actions
export const authStoreSelectors = { currentUser }
export default reducer

