import { FC } from "react"

import { BookOpen } from "@gravity-ui/icons"

import Drawer from "react-modern-drawer"
import "react-modern-drawer/dist/index.css"

import { featureStoreSelectors, featureStoreSlice } from "@/store/FeatureStore"
import { useAppDispatch, useAppSelector } from "@/store/hooks"

import "./index.scss"

export const LessonsDrawer: FC = () => {
	const dispatcher = useAppDispatch()
	const selector = {
		selectLessonsDrawerOpen: useAppSelector(
			featureStoreSelectors.lessonsDrawerOpen,
		),
	}

	return (
		<>
			<Drawer
				open={selector.selectLessonsDrawerOpen}
				onClose={() =>
					dispatcher(
						featureStoreSlice.actions.toggleLessonsDrawerOpenAction(),
					)
				}
				direction="right"
				className="lessons-drawer"
			>
				<div className="lessons-drawer-content">
					<div className="lessons-drawer-content__header">
						<BookOpen />
						<h3>Lessons</h3>
					</div>
					<div className="lessons-drawer-content__body"></div>
				</div>
			</Drawer>
		</>
	)
}

