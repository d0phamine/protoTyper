import { FC } from "react"

import { Button } from "antd"

import "./index.scss"

interface ICustomButtonProps {
	text?: string
	icon?: React.ReactNode
	size?: "large" | "middle" | "small"
	disabled?: boolean
	error?: boolean
	block?: boolean
	onClick?: () => void
}

export const CustomButton: FC<ICustomButtonProps> = ({
	text,
	icon,
	disabled,
	error,
	size,
	block,
	onClick,
}: ICustomButtonProps) => {
	return (
		<div
			className={`custom-button ${disabled ? "disabled" : ""} ${error ? "error" : ""}`}
		>
			<Button
				onClick={onClick}
				size={size}
				disabled={disabled}
				icon={icon}
				block={block}
			>
				{text}
			</Button>
		</div>
	)
}
