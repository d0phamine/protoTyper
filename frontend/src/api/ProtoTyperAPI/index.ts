import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

import { Lesson } from "@/types/features"

export const protoTyperApi = createApi({
	reducerPath: "protoTyperApi",
	baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
	endpoints: (builder) => ({
		getLessons: builder.query<Lesson[], void>({
			query: () => "/lessons",
		}),
		getLessonById: builder.query<Lesson, number>({
			query: (id) => "/lessons/" + id,
		}),
	}),
})

export const { useGetLessonsQuery, useGetLessonByIdQuery } = protoTyperApi

