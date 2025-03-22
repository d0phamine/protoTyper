import { ActionReducerMapBuilder, CaseReducer } from "@reduxjs/toolkit"

import { IAuthStore } from "@/types/processes"

import { protoTyperApi } from "@/api"

export const setToken = (
	builder: ActionReducerMapBuilder<IAuthStore>,
) => {
	builder.addMatcher(
		protoTyperApi.endpoints.loginUser.matchFulfilled,
		(state, action) => {
			state.authToken = action.payload
			state.isAuth = true
			localStorage.setItem("userToken", state.authToken)
		},
	)
	builder.addMatcher(
		protoTyperApi.endpoints.registerUser.matchFulfilled,
		(state, action) => {
			state.authToken = action.payload
			state.isAuth = true
			localStorage.setItem("userToken", state.authToken)
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

