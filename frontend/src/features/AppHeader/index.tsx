import { FC } from "react"

import {
	BookOpen,
	LayoutHeaderCellsLargeThunderbolt,
	Person,
} from "@gravity-ui/icons"

import { SubButton } from "@/components"
import { useNavigate } from "react-router-dom"

import { toggleLessonsDrawerOpenAction } from "@/store/FeatureStore"
import { useAppDispatch } from "@/store/hooks"

import { LessonsDrawer } from "@/features/LessonsDrawer"

import "./index.scss"

export const AppHeader: FC = () => {
	const navigate = useNavigate()
	const dispatcher = useAppDispatch()
	return (
		<div className="app-header">
			<div className="app-header__logo" onClick={() => navigate("/")}>
				<LayoutHeaderCellsLargeThunderbolt />
				<h2>protoTyper</h2>
			</div>
			<div className="app-header__menu">
				<SubButton icon={<Person />} style={{ gap: 0 }} />
				<SubButton
					icon={<BookOpen />}
					style={{ gap: 0 }}
					onClick={() => dispatcher(toggleLessonsDrawerOpenAction())}
				/>
				<LessonsDrawer />
			</div>
		</div>
	)
}

