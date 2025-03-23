import { FC, ReactNode, useEffect } from "react"

import { AppFooter, AppHeader } from "@/features"

import { initAuthAction } from "@/store/AuthStore"
import { useAppDispatch } from "@/store/hooks"

import "./index.scss"

export interface ILayout {
	children: ReactNode
}

export const MainLayout: FC<ILayout> = ({ children }) => {
	const dispatcher = useAppDispatch()

	useEffect(() => {
		dispatcher(initAuthAction())
	}, [])
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
