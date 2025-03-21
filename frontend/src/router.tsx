import { FC } from "react"

import { Route, Routes } from "react-router-dom"

import { MainPage, LessonsPage } from "./pages"


export const Router: FC = () => {
	return (
		<Routes>
			<Route path="/" element={<MainPage />} />
			<Route path="/lessons/:id" element={<LessonsPage/>}/>
		</Routes>
	)
}
