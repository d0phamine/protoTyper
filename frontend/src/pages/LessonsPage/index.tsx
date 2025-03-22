import { FC } from "react"

import { MainTextArea } from "@/features"
import { MainLayout } from "@/layouts/MainLayout"
import { useParams } from "react-router-dom"

import { useGetLessonByIdQuery } from "@/api"

import { lessonsStoreSelectors } from "@/store/LessonsStore"
import { useAppSelector } from "@/store/hooks"

import "./index.scss"

export const LessonsPage: FC = () => {
	const { id } = useParams<{ id: string }>()
	const { data: lesson, isLoading, error } = useGetLessonByIdQuery(Number(id))

	const selector = {
		currentLesson: useAppSelector(lessonsStoreSelectors.currentLesson),
	}

	console.log(lesson)

	return (
		<MainLayout>
			<div className="lessons-page content-grid full-width">
				<div>{selector.currentLesson?.name}</div>
				<MainTextArea />
			</div>
		</MainLayout>
	)
}

