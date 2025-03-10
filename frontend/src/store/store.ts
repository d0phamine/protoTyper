import type { Action, ThunkAction } from "@reduxjs/toolkit"
import { combineSlices, configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"

import { themeApi } from "@/api"

import { mainConfiguratorSlice } from "@/store/MainConfigurator/"
import { themeSwitcherSlice } from "@/store/ThemeSwitcher/"

const rootReducer = combineSlices(
	mainConfiguratorSlice,
	themeSwitcherSlice,
	themeApi,
)
export type RootState = ReturnType<typeof rootReducer>

export const makeStore = (preloadedState?: Partial<RootState>) => {
	const store = configureStore({
		reducer: rootReducer,
		preloadedState,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(themeApi.middleware),
	})

	setupListeners(store.dispatch)
	return store
}

export const store = makeStore()

export type AppStore = typeof store
export type AppDispatch = AppStore["dispatch"]
export type AppThunk<ThunkReturnType = void> = ThunkAction<
	ThunkReturnType,
	RootState,
	unknown,
	Action
>

