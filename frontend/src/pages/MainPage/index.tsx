import { FC, useEffect } from "react"

import { MainConfigurator, MainTextArea } from "@/features"
import { MainLayout } from "@/layouts/MainLayout"

import { initAuthAction } from "@/store/AuthStore"
import { useAppDispatch } from "@/store/hooks"

import "./index.scss"

export const MainPage: FC = () => {
	const dispatcher = useAppDispatch()

	useEffect(() => {
		dispatcher(initAuthAction())
	}, [])

	return (
		<MainLayout>
			<div className="main-page content-grid full-width">
				<MainConfigurator />
				<MainTextArea />
			</div>
		</MainLayout>
	)
}
