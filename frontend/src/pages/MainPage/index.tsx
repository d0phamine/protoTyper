import { FC } from "react"

import { MainConfigurator, MainTextArea } from "@/features"
import { MainLayout } from "@/layouts/MainLayout"

import "./index.scss"

export const MainPage: FC = () => {
	return (
		<MainLayout>
			<div className="main-page content-grid full-width">
				<MainConfigurator />
				<MainTextArea />
			</div>
		</MainLayout>
	)
}
