import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

import { Lesson, UserCredentials } from "@/types/processes"

import { RootState } from "@/store/store"

export const protoTyperApi = createApi({
	reducerPath: "protoTyperApi",
	baseQuery: fetchBaseQuery({
		baseUrl: import.meta.env.VITE_API_URL,
		prepareHeaders: (headers, { getState }) => {
			const token = (getState() as RootState).authStore.authToken

			if (token) {
				headers.set("Authorization", `${token}`)
			}

			return headers
		},
	}),
	endpoints: (builder) => ({
		getLessons: builder.query<Lesson[], void>({
			query: () => "/lessons",
		}),
		getLessonById: builder.query<Lesson, number>({
			query: (id) => "/lessons/" + id,
		}),
		registerUser: builder.mutation<string, UserCredentials>({
			query: (userCredentials) => ({
				url: "/registration",
				method: "POST",
				body: userCredentials,
			}),
		}),
		loginUser: builder.mutation<string, UserCredentials>({
			query: (userCredentials) => ({
				url: "/login",
				method: "POST",
				body: userCredentials,
			}),
		}),
	}),
})

export const { useGetLessonsQuery, useGetLessonByIdQuery } = protoTyperApi

