import { useEffect, useRef, useState } from "react"
import { Id, Slide, ToastOptions, toast } from "react-toastify"

export const successToastOptions: ToastOptions = {
	className: "styled-notifications-success",
	position: "bottom-left",
	autoClose: 5000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
	theme: "dark",
	transition: Slide,
	type: "success",
}

export const errorToastOptions: ToastOptions = {
	className: "styled-notifications-error",
	position: "bottom-left",
	autoClose: 5000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
	theme: "dark",
	transition: Slide,
	type: "error",
}

const useLoadingToast = (isLoading: boolean, message: string) => {
	const hasShownLoadingToast = useRef(false)
	const [toastId, setToastId] = useState<Id | null>(null)

	useEffect(() => {
		if (isLoading && !hasShownLoadingToast.current) {
			// Показываем тост и сохраняем его ID
			const id = toast.loading(message, {
				position: "bottom-left",
				transition: Slide,
			})
			hasShownLoadingToast.current = true
			setToastId(id)
		} else if (toastId) {
			// Закрываем тост, если он был открыт
			toast.dismiss(toastId)
			setToastId(null)
		}
	}, [isLoading]) // Триггерим эффект при изменении isLoading

	return toastId // Можно использовать ID, если нужно
}

const useSuccessToast = (isSuccess: boolean, message: string) => {
	const hasShownSuccessToast = useRef(false)
	useEffect(() => {
		if (isSuccess && !hasShownSuccessToast.current) {
			toast.success(message, successToastOptions)
			hasShownSuccessToast.current = true // Устанавливаем флаг, чтобы не показывать снова
		}
	}, [isSuccess])
}

const useErrorToast = (isError: boolean, message: string) => {
	const hasShownErrorToast = useRef(false)
	useEffect(() => {
		if (isError && !hasShownErrorToast.current) {
			toast.error(message, errorToastOptions)
			hasShownErrorToast.current = true
		}
	}, [isError])
}

export const useToaster = { useErrorToast, useLoadingToast, useSuccessToast }
