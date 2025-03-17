import { FC } from "react"

import { BookOpen } from "@gravity-ui/icons"

import { BigListElement } from "@/components"
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
					<div className="lessons-drawer-content__body">
						<BigListElement
							title="lesson 1"
							description="description of first lesson and something special"
							setActive
						/>
						<BigListElement
							title="lesson 2"
							description="description of second lesson and something special"
						/>
						<BigListElement
							title="lesson 3"
							description="description of third lesson and something special"
						/>
					</div>
				</div>
			</Drawer>
		</>
	)
}

