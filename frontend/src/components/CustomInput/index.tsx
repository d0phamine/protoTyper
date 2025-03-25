import { FC } from "react"
import { ChangeEvent } from "react"

import { Input } from "antd"

import "./index.scss"

interface ICustomInputProps {
	placeholder?: string
	name?: string
	value?: string
	variant?: "outlined" | "borderless" | "filled"
	validationState?: "error" | "warning"
	hasClear?: boolean
	type?: "email" | "number" | "password" | "search" | "tel" | "text" | "url"
	size?: "large" | "middle" | "small"
	onChange?: {
		(e: ChangeEvent): void
		<T = string | ChangeEvent>(
			field: T,
		): T extends ChangeEvent ? void : (e: string | ChangeEvent) => void
	}
}

export const CustomInput: FC<ICustomInputProps> = ({
	placeholder,
	name,
	variant,
	hasClear,
	type,
	size,
	value,
	validationState,
	onChange,
}: ICustomInputProps) => {
	return (
		<div className="custom-input">
			<Input
				placeholder={placeholder}
				name={name}
				variant={variant}
				allowClear={hasClear}
				type={type}
				size={size}
				value={value}
				status={validationState}
				onChange={onChange}
				autoComplete="off"
			/>
		</div>
	)
}
