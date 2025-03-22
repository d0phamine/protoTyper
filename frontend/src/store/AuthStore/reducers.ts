import { ActionReducerMapBuilder, CaseReducer } from "@reduxjs/toolkit"

import { IAuthStore } from "@/types/processes"

import { protoTyperApi } from "@/api"

export const setToken = (builder: ActionReducerMapBuilder<IAuthStore>) => {
	builder.addMatcher(
		(action) =>
			protoTyperApi.endpoints.loginUser.matchFulfilled(action) ||
			protoTyperApi.endpoints.registerUser.matchFulfilled(action),
		(state, action) => {
			state.authToken = action.payload
			state.isAuth = true
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

