import { ReactNode } from "react"

export interface subButtonProps {
	title?: string | null
	icon?: ReactNode | null
	style?: object
	customClass?: string
	onClick?: () => void
}
