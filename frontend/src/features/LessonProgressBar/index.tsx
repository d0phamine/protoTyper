import { FC, useEffect } from "react"

import { Skeleton, Steps } from "antd"

import {
	goToStepAction,
	lessonsStoreSelectors,
	setCurrentStepManuallyAction,
} from "@/store/LessonsStore"
import { useAppDispatch, useAppSelector } from "@/store/hooks"

import "./index.scss"

export const LessonProgressBar: FC = () => {
	const selector = {
		currentLesson: useAppSelector(lessonsStoreSelectors.currentLesson),
		currentStep: useAppSelector(lessonsStoreSelectors.currentStep),
		currentStepIndex: useAppSelector(
			lessonsStoreSelectors.currentStepIndex,
		),
		currentStepResult: useAppSelector(
			lessonsStoreSelectors.currentStepResult,
		),
	}
	const dispatch = useAppDispatch()

	useEffect(() => {
		if (selector.currentLesson) {
			dispatch(
				setCurrentStepManuallyAction(
					selector.currentLesson?.steps[selector.currentStepIndex],
				),
			)
		}
	}, [selector.currentLesson])

	// console.log(selector.currentStepIndex, "currStepIndex")
	// console.log(selector.currentStep, "currentStep")

	return selector.currentLesson ? (
		<Steps
			className="lesson-progress-bar"
			percent={(selector.currentStepResult?.percentage || 0) * 100}
			onChange={(value) => {
				if (selector.currentLesson) {
					dispatch(
						setCurrentStepManuallyAction(
							selector.currentLesson?.steps[value],
						),
					)
					dispatch(
						goToStepAction({
							stepIndex: value,
							steps: selector.currentLesson.steps,
							funcType: "curr",
						}),
					)
				}
			}}
			current={selector.currentStepIndex}
			items={selector.currentLesson?.steps.map((step) => ({
				title: step.name,
				description: step.description,
			}))}
		/>
	) : (
		<Skeleton.Button block size="large" active style={{ height: "46px" }} />
	)
}

