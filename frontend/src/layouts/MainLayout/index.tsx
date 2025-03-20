import { FC, ReactNode } from "react"

import { AppFooter, AppHeader } from "@/features"

import "./index.scss"

export interface ILayout {
	children: ReactNode
}

export const MainLayout: FC<ILayout> = ({ children }) => {
	return (
		<>
			<div className="layout-wrapper">
				<div className="main-layout content-grid">
					<AppHeader />
					{children}
					<AppFooter />
				</div>
			</div>
		</>
	)
}
