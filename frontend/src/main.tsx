import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { HashRouter } from "react-router-dom"
import { ToastContainer } from "react-toastify"

import { ThemeProvider } from "@gravity-ui/uikit"

import { ConfigProvider, theme } from "antd"

import { store } from "@/store/store"

import { Router } from "./router"
import "./styles/global.scss"

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<HashRouter>
			<ConfigProvider
				theme={{
					algorithm: theme.darkAlgorithm,

					token: {
						// Seed Token
						colorPrimary: "var(--main-color)",
					},
				}}
			>
				<ThemeProvider>
					<Provider store={store}>
						<Router />
						<ToastContainer
							position="bottom-left"
							autoClose={2500}
						/>
					</Provider>
				</ThemeProvider>
			</ConfigProvider>
		</HashRouter>
	</StrictMode>,
)
