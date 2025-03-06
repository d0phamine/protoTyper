import { StrictMode } from "react"

import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { HashRouter } from "react-router-dom"

import { store } from "@/store/store"

import { Router } from "./router"
import "./styles/global.scss"

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<HashRouter>
			<Provider store={store}>
				<Router />
			</Provider>
		</HashRouter>
	</StrictMode>,
)
