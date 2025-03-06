import { FC } from "react"

import { MainLayout } from "@/layouts/MainLayout"

import "./index.scss"

export const MainPage: FC = () => {
	return (
		<MainLayout>
			<div className="main-page">
				<div className="main-page__header">
					<div className="header-logo">
						
					</div>
					<div className="header-menu"></div>
				</div>
				<div className="main-page__content"></div>
				<div className="main-page__footer"></div>
			</div>
		</MainLayout>
	)
}
