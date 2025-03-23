import { FC } from "react"
import Skeleton from "react-loading-skeleton"
import Drawer from "react-modern-drawer"
import "react-modern-drawer/dist/index.css"
import { useNavigate } from "react-router-dom"

import { BookOpen } from "@gravity-ui/icons"

import { BigListElement } from "@/components"

import { Lesson } from "@/types/processes"

import { useGetLessonsQuery } from "@/api"

import {
	featureStoreSelectors,
	toggleLessonsDrawerOpenAction,
} from "@/store/FeatureStore"
import { useAppDispatch, useAppSelector } from "@/store/hooks"

import "./index.scss"

export const LessonsDrawer: FC = () => {
	const navigate = useNavigate()
	const dispatcher = useAppDispatch()
	const selector = {
		selectLessonsDrawerOpen: useAppSelector(
			featureStoreSelectors.lessonsDrawerOpen,
		),
	}

	const { data: lessons, isLoading: isLessonsLoading } = useGetLessonsQuery()

	return (
		<>
			<Drawer
				open={selector.selectLessonsDrawerOpen}
				onClose={() => dispatcher(toggleLessonsDrawerOpenAction())}
				direction="right"
				className="lessons-drawer"
			>
				<div className="lessons-drawer-content">
					<div className="lessons-drawer-content__header">
						<BookOpen />
						<h3>Lessons</h3>
					</div>
					<div className="lessons-drawer-content__body">
						{isLessonsLoading ? (
							<Skeleton count={5} height={40} />
						) : (
							lessons?.map((lesson: Lesson) => {
								return (
									<BigListElement
										key={lesson.id}
										title={lesson.name}
										description={lesson.description}
										onClick={() => {
											navigate(`/lessons/${lesson.id}`)
										}}
									/>
								)
							})
						)}
					</div>
				</div>
			</Drawer>
		</>
	)
}

