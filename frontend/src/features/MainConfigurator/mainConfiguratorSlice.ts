import { createAppSlice } from "@/store/createAppSlice";

export interface IMainConfiguratorState {
    textMode: "word" | "quotes" | "zen";
}

const initialState: IMainConfiguratorState = {
    textMode: "word",
}

export const mainConfiguratorSlice = createAppSlice({
    name: "mainConfigurator",
    initialState,
    reducers: {
        setWordMode: (state, action) => {
            state.textMode = action.payload;
        },
    },
    selectors: {
        selectWordMode: (state) => state.textMode,
    }
})

export const { setWordMode } = mainConfiguratorSlice.actions;
export const { selectWordMode } = mainConfiguratorSlice.selectors;