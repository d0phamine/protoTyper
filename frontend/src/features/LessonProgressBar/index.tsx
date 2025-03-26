import { FC } from "react"

import { Steps } from "antd"

import {
	lessonsStoreSelectors,
	setCurrentStepManuallyAction,
} from "@/store/LessonsStore"
import { useAppDispatch, useAppSelector } from "@/store/hooks"

import "./index.scss"

export const LessonProgressBar: FC = () => {
	const selector = {
		currentLesson: useAppSelector(lessonsStoreSelectors.currentLesson),
		currentStep: useAppSelector(lessonsStoreSelectors.currentStep),
	}
	const dispatch = useAppDispatch()

	return selector.currentLesson ? (
		<Steps
			className="lesson-progress-bar"
            percent={selector.currentLesson.result.percentage}
			onChange={(value) => {
				if (selector.currentLesson) {
					console.log("click works")
					dispatch(
						setCurrentStepManuallyAction(
							selector.currentLesson?.steps[value],
						),
					)
				}
			}}
			current={(selector.currentStep?.id ?? 1) - 1}
			items={selector.currentLesson?.steps.map((step) => ({
				title: step.name,
				description: step.description,
			}))}
		/>
	) : null
}

