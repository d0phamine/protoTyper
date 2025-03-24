import type { Action, ThunkAction } from "@reduxjs/toolkit"
import { combineSlices, configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"

import { protoTyperApi, themeApi } from "@/api"

import { featureStoreSlice } from "@/store/FeatureStore"
import { lessonsStoreSlice } from "@/store/LessonsStore"
import { mainConfiguratorSlice } from "@/store/MainConfigurator/"
import { themeSwitcherSlice } from "@/store/ThemeSwitcher/"

import { authStoreSlice, initAuthAction } from "./AuthStore/authStoreSlice"

const rootReducer = combineSlices(
	mainConfiguratorSlice,
	themeSwitcherSlice,
	featureStoreSlice,
	lessonsStoreSlice,
	authStoreSlice,
	themeApi,
	protoTyperApi,
)
export type RootState = ReturnType<typeof rootReducer>

export const makeStore = (preloadedState?: Partial<RootState>) => {
	const store = configureStore({
		reducer: rootReducer,
		preloadedState,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(
				themeApi.middleware,
				protoTyperApi.middleware,
			),
	})

	setupListeners(store.dispatch)
	return store
}

export const store = makeStore()

store.dispatch(initAuthAction())

export type AppStore = typeof store
export type AppDispatch = AppStore["dispatch"]
export type AppThunk<ThunkReturnType = void> = ThunkAction<
	ThunkReturnType,
	RootState,
	unknown,
	Action
>
