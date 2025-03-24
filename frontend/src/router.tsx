import { FC } from "react"
import { Route, Routes } from "react-router-dom"

import { AuthPage, LessonsPage, MainPage, NotFoundPage } from "./pages"
import { authStoreSelectors } from "./store/AuthStore"
import { useAppSelector } from "./store/hooks"

export const Router: FC = () => {
	const selector = {
		isAuth: useAppSelector(authStoreSelectors.isAuth),
	}
	return (
		<Routes>
			<Route path="/" element={<MainPage />} />
			<Route path="/lessons/:id" element={<LessonsPage />} />
			<Route
				path="/auth"
				element={selector.isAuth ? <NotFoundPage /> : <AuthPage />}
			/>
		</Routes>
	)
}
