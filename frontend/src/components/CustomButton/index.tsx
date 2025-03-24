import { FC } from "react"

import { Button } from "@gravity-ui/uikit"

import "./index.scss"

interface ICustomButtonProps {
	text?: string
	icon?: React.ReactNode
	size?: "xs" | "s" | "m" | "l" | "xl"
	disabled?: boolean
	error?: boolean
	onClick?: () => void
}

export const CustomButton: FC<ICustomButtonProps> = ({
	text,
	icon,
	disabled,
	error,
	size,
	onClick,
}: ICustomButtonProps) => {
	return (
		<div
			className={`custom-button ${disabled ? "disabled" : ""} ${error ? "error" : ""}`}
		>
			<Button onClick={onClick} size={size} disabled={disabled}>
				{icon}
				{text}
			</Button>
		</div>
	)
}
