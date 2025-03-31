import type { Action, ThunkAction } from "@reduxjs/toolkit"
import { combineSlices, configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"

import { protoTyperApi, themeApi } from "@/api"

import { featureStoreSlice } from "@/store/FeatureStore"
import { lessonsStoreSlice, stepResultMiddleware } from "@/store/LessonsStore"
import { mainConfiguratorSlice } from "@/store/MainConfigurator/"
import { themeSwitcherSlice } from "@/store/ThemeSwitcher/"

import { adminStoreSlice } from "./AdminStore/adminStoreSlice"
import { authStoreSlice, initAuthAction } from "./AuthStore/authStoreSlice"

const rootReducer = combineSlices(
	mainConfiguratorSlice,
	themeSwitcherSlice,
	featureStoreSlice,
	lessonsStoreSlice,
	authStoreSlice,
	adminStoreSlice,
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
				stepResultMiddleware,
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
