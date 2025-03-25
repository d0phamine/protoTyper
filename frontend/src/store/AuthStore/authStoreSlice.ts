import { createSelector, createAsyncThunk } from "@reduxjs/toolkit"

import { IAuthStore } from "@/types/processes"

import { createAppSlice } from "@/store/createAppSlice"
import { RootState } from "@/store/store"

import { protoTyperApi } from "@/api"

import { initAuth, logout, setToken, setUser } from "./reducers"

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
		logoutAction: logout,
	},
	extraReducers: (builder) => {
		setToken(builder)
		setUser(builder)
	},
})

export const logoutThunk = createAsyncThunk(
	"auth/logout",
	async (_, { dispatch }) => {
		dispatch(logoutAction()) // Очищаем стейт авторизации
		dispatch(protoTyperApi.util.resetApiState()) // Очищаем кеш профиля
	}
)

const selectAuthStore = (state: RootState) => state.authStore

const isAuth = createSelector([selectAuthStore], (state) => state.isAuth)
const currentUser = createSelector([selectAuthStore], (state) => state.user)

const { reducer, actions } = authStoreSlice
export const { initAuthAction, logoutAction } = actions
export const authStoreSelectors = { currentUser, isAuth }
export default reducer
