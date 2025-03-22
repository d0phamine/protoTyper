import { ActionReducerMapBuilder } from "@reduxjs/toolkit"

import { ILessonsStore } from "@/types/features"
import { Lesson } from "@/types/features"

import { protoTyperApi } from "@/api"

export const setLessons = (builder: ActionReducerMapBuilder<ILessonsStore>) => {
	builder.addMatcher(
		protoTyperApi.endpoints.getLessons.matchFulfilled,
		(state, action) => {
			state.lessons = action.payload as Lesson[]
		},
	)
}

export const setCurrentLesson = (
	builder: ActionReducerMapBuilder<ILessonsStore>,
) => {
	builder.addMatcher(
		protoTyperApi.endpoints.getLessonById.matchFulfilled,
		(state, action) => {
			state.currentLesson = action.payload as Lesson
		},
	)
}

