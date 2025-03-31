import { Middleware } from "@reduxjs/toolkit"

import { protoTyperApi } from "@/api"

import { AppStore } from "../store"
import { setStepResultAction } from "./lessonsStoreSlice"

export const stepResultMiddleware: Middleware =
	(store) => (next) => (action) => {
		const prevState = store.getState() // Сохраняем старый state перед изменением
		const result = next(action) // Выполняем action
		const nextState = store.getState() // Получаем обновленный state

		if (setStepResultAction.fulfilled.match(action)) {
			const { currentLesson, currentStep, stepResult } =
				nextState.lessonsStore

			if (
				prevState.lessonsStore.stepResult !== stepResult &&
				currentLesson &&
				currentStep &&
				stepResult
			) {
				console.log("Отправляем результат:", stepResult)

				;(store.dispatch as AppStore["dispatch"])(
					protoTyperApi.endpoints.postStepResult.initiate({
						lessonId: currentLesson.id,
						stepId: currentStep.id,
						result: stepResult,
					}),
				)
			}

			return result
		}
	}

