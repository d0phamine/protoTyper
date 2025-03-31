import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

import {
	AuthResponse,
	Lesson,
	LessonStep,
	LessonStepResult,
	User,
	UserAdmin,
	UserCredentials,
} from "@/types/processes"

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
			query: (id) => `/lessons/${id}`,
		}),
		getStepById: builder.query<
			LessonStep,
			{ lessonId: number; stepId: number }
		>({
			query: ({ lessonId, stepId }) =>
				`/lessons/${lessonId}/steps/${stepId}`,
		}),
		getUserProfile: builder.query<User, void>({
			query: () => "/users/profile",
		}),
		getUsersAdmin: builder.query<UserAdmin[], void>({
			query: () => "/users",
		}),
		postStepResult: builder.mutation<
			void,
			{ lessonId: number; stepId: number; result: LessonStepResult }
		>({
			query: ({ lessonId, stepId, result }) => ({
				url: `/lessons/${lessonId}/steps/${stepId}/result`,
				method: "POST",
				body: result,
			}),
		}),
		registerUser: builder.mutation<AuthResponse, UserCredentials>({
			query: (userCredentials) => ({
				url: "auth/registration",
				method: "POST",
				body: userCredentials,
			}),
		}),
		loginUser: builder.mutation<AuthResponse, UserCredentials>({
			query: (userCredentials) => ({
				url: "auth/login",
				method: "POST",
				body: userCredentials,
			}),
		}),
	}),
})

export const {
	useGetLessonsQuery,
	useGetLessonByIdQuery,
	useGetStepByIdQuery,
	useLazyGetStepByIdQuery,
	useGetUserProfileQuery,
	useGetUsersAdminQuery,
	useLoginUserMutation,
	useRegisterUserMutation,
	usePostStepResultMutation,
} = protoTyperApi
