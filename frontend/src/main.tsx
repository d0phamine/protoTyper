import { StrictMode } from "react"

import { createRoot } from "react-dom/client"
import { HashRouter } from "react-router-dom"

import { Router } from "./router"
import "./styles/global.scss"

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<HashRouter>
			<Router />
		</HashRouter>
	</StrictMode>,
)
