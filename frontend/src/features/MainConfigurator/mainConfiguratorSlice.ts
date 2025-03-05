import { createAppSlice } from "@/store/createAppSlice";

export interface IMainConfiguratorState {
    wordMode: "word" | "quotes" | "zen";
}

const initialState: IMainConfiguratorState = {
    wordMode: "word",
}

export const mainConfiguratorSlice = createAppSlice({
    name: "mainConfigurator",
    initialState,
    reducers: {
        setWordMode: (state, action) => {
            state.wordMode = action.payload;
        },
    },
    selectors: {
        selectWordMode: (state) => state.wordMode,
    }
})

export const { setWordMode } = mainConfiguratorSlice.actions;
export const { selectWordMode } = mainConfiguratorSlice.selectors;