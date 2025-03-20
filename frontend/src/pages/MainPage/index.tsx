import { FC } from "react"

import {
	LessonsDrawer,
	MainConfigurator,
	MainTextArea,
	ThemeSwitcher,
} from "@/features"
import { MainLayout } from "@/layouts/MainLayout"

import "./index.scss"

export const MainPage: FC = () => {
	return (
		<MainLayout>
			<div className="main-page">
				<div className="main-page__content">
					<MainConfigurator />
					<MainTextArea />
					<LessonsDrawer />
					<ThemeSwitcher />
				</div>
			</div>
		</MainLayout>
	)
}
