import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { HashRouter } from "react-router-dom"
import { ToastContainer } from "react-toastify"

import { ThemeProvider } from "@gravity-ui/uikit"

import { store } from "@/store/store"

import { Router } from "./router"
import "./styles/global.scss"

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<HashRouter>
			<ThemeProvider>
				<Provider store={store}>
					<Router />
					<ToastContainer position="bottom-left" autoClose={2500} />
				</Provider>
			</ThemeProvider>
		</HashRouter>
	</StrictMode>,
)
