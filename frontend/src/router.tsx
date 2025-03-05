import { FC } from "react"

import { Route, Routes } from "react-router-dom"

import { MainPage } from "./pages/MainPage"

export const Router: FC = () => {
	return (
		<Routes>
			<Route path="/" element={<MainPage />} />
		</Routes>
	)
}
