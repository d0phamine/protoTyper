import "@ant-design/v5-patch-for-react-19"

import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { HashRouter } from "react-router-dom"
import { ToastContainer } from "react-toastify"

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
						fontFamily: "Geist Mono Variable",
					},
				}}
			>
				<Provider store={store}>
					<Router />
					<ToastContainer position="bottom-left" autoClose={2500} />
				</Provider>
			</ConfigProvider>
		</HashRouter>
	</StrictMode>,
)
