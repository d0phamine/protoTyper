import { CaseReducer, PayloadAction } from "@reduxjs/toolkit"

import { EntityType, IAdminStore } from "@/types/processes"

export const setCurrentViewEntity: CaseReducer<
	IAdminStore,
	PayloadAction<EntityType>
> = (state, action) => {
	state.currentViewEntity = action.payload
}
