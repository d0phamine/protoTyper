import { ActionReducerMapBuilder, CaseReducer } from "@reduxjs/toolkit"

import { IAuthStore } from "@/types/processes"

import { protoTyperApi } from "@/api"

export const setToken = (builder: ActionReducerMapBuilder<IAuthStore>) => {
	builder.addMatcher(
		(action) =>
			protoTyperApi.endpoints.loginUser.matchFulfilled(action) ||
			protoTyperApi.endpoints.registerUser.matchFulfilled(action),
		(state, action) => {
			const token = action.payload?.token // ✅ Достаем токен из ответа

			if (token) {
				state.authToken = token
				localStorage.setItem("userToken", token)
				state.isAuth = true
			} else {
				console.error(
					"Token is missing in the response:",
					action.payload,
				)
			}
		},
	)
}

export const setUser = (builder: ActionReducerMapBuilder<IAuthStore>) => {
	builder.addMatcher(
		(action) =>
			protoTyperApi.endpoints.getUserProfile.matchFulfilled(action),
		(state, action) => {
			state.user = action.payload
		},
	)
}

export const initAuth: CaseReducer<IAuthStore> = (state) => {
	const token = localStorage.getItem("userToken")

	if (token) {
		state.authToken = token
		state.isAuth = true
	}
}

export const logout: CaseReducer<IAuthStore> = (state) => {
	const token = localStorage.getItem("userToken")

	if (token) {
		localStorage.removeItem("userToken")
		state.authToken = null
		state.isAuth = false
	}
}
