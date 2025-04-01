import { FC } from "react"
import Drawer from "react-modern-drawer"
import "react-modern-drawer/dist/index.css"
import { useNavigate } from "react-router-dom"

import { BookOpen } from "@gravity-ui/icons"
import { Skeleton, Progress } from "antd"

import { Lesson } from "@/types/processes"

import { useGetLessonsQuery } from "@/api"

import {
	featureStoreSelectors,
	toggleLessonsDrawerOpenAction,
} from "@/store/FeatureStore"
import { useAppDispatch, useAppSelector } from "@/store/hooks"

import { BigListElement } from "@/components"

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
							<div className="gap-column-6">
								<Skeleton.Button block active size="large"/>
								<Skeleton.Button block active size="large"/>
								<Skeleton.Button block active size="large"/>
								<Skeleton.Button block active size="large"/>
								<Skeleton.Button block active size="large"/>
							</div>
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
										endContent={<Progress type="circle" percent={50} size={20} />}
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
