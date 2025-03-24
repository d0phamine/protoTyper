import { FC } from "react"
import { ChangeEvent } from "react"

import { TextInput } from "@gravity-ui/uikit"

import "./index.scss"

interface ICustomInputProps {
	placeholder?: string
	name?: string
	value?: string
	validationState?: "invalid"
	hasClear?: boolean
	type?: "email" | "number" | "password" | "search" | "tel" | "text" | "url"
	size?: "s" | "m" | "l" | "xl"
	errorMessage?: string
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
	hasClear,
	type,
	size,
	value,
	validationState,
	errorMessage,
	onChange,
}: ICustomInputProps) => {
	return (
		<div className="custom-input">
			<TextInput
				placeholder={placeholder}
				name={name}
				hasClear={hasClear}
				type={type}
				size={size}
				value={value}
				validationState={validationState}
				errorMessage={errorMessage}
				onChange={onChange}
				autoComplete={false}
			/>
		</div>
	)
}
