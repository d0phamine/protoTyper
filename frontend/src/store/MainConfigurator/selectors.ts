import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '@/store/store'

const selectMainConfigurator = (state: RootState) => state.mainConfigurator

export const selectWordMode = createSelector([selectMainConfigurator], (state) => state.textMode)