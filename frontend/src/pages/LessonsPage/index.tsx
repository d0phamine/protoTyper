import { MainTextArea } from "@/features"
import { useToaster } from "@/hooks"

import { FC } from "react"
import { useParams } from "react-router-dom"

import { useGetLessonByIdQuery } from "@/api"

import { lessonsStoreSelectors } from "@/store/LessonsStore"
import { useAppSelector } from "@/store/hooks"

import { MainLayout } from "@/layouts/MainLayout"

import "./index.scss"

export const LessonsPage: FC = () => {
	const { id } = useParams<{ id: string }>()

	const {
		data: lesson,
		isLoading,
		error,
		isSuccess,
		isError,
	} = useGetLessonByIdQuery(Number(id))
	const selector = {
		currentLesson: useAppSelector(lessonsStoreSelectors.currentLesson),
	}

	useToaster.useLoadingToast(isLoading, "Loading lesson...")
	useToaster.useSuccessToast(isSuccess, "Lesson loaded successfully")
	useToaster.useErrorToast(isError, `Error loading lesson ${error}`)

	console.log(lesson)

	return (
		<MainLayout>
			<div className="lessons-page content-grid full-width">
				{/* <div>{selector.currentLesson?.name}</div> */}
				<div className="lessons-page__lesson-info">
					<div className="lesson-info-description">
						<h4>{selector.currentLesson?.name}</h4>
						<p>{selector.currentLesson?.description}</p>
						<p>language: {selector.currentLesson?.language}</p>
					</div>
					<div className="lesson-info-progress">
					</div>
				</div>
				<MainTextArea />
			</div>
		</MainLayout>
	)
}
