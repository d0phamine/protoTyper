import { LessonProgressBar, MainTextArea } from "@/features"
import { useToaster } from "@/hooks"

import { FC } from "react"
import { useParams } from "react-router-dom"

import { Skeleton } from "antd"

import { useGetLessonByIdQuery } from "@/api"

import { lessonsStoreSelectors } from "@/store/LessonsStore"
import { useAppSelector } from "@/store/hooks"

import { SubButton } from "@/components"

import { MainLayout } from "@/layouts/MainLayout"

import "./index.scss"

export const LessonsPage: FC = () => {
	const { id } = useParams<{ id: string }>()

	const { isLoading, error, isSuccess, isError } = useGetLessonByIdQuery(
		Number(id),
	)
	const selector = {
		currentLesson: useAppSelector(lessonsStoreSelectors.currentLesson),
	}

	useToaster.useLoadingToast(isLoading, "Loading lesson...")
	useToaster.useSuccessToast(isSuccess, "Lesson loaded successfully")
	useToaster.useErrorToast(isError, `Error loading lesson ${error}`)

	return (
		<MainLayout>
			<div className="lessons-page content-grid full-width">
				<div className="lessons-page__lesson-info">
					{selector.currentLesson ? (
						<div className="lesson-info-description">
							<h4>{selector.currentLesson?.name}</h4>
							<SubButton
								title={`(${selector.currentLesson?.language})`}
								customClass="p-0"
								style={{ gap: 0 }}
								bold
							/>
							<p>{selector.currentLesson?.description}</p>
						</div>
					) : (
						<div className="lesson-info-description">
							<Skeleton.Input active size="small" />
							<Skeleton.Input active size="small" />
							<Skeleton.Input active size="small" block />
						</div>
					)}
					<div className="lesson-info-progress">
						<LessonProgressBar />
					</div>
				</div>
				<MainTextArea />
			</div>
		</MainLayout>
	)
}
