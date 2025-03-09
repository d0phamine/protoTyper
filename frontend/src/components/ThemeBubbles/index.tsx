import { FC } from "react"

import { Theme } from "@/types/features"

import "./index.scss"

export interface themeBubblesProps {
	theme: Theme
}

export const ThemeBubbles: FC<themeBubblesProps> = (props) => {
	return (
		<div
			className="theme-bubbles"
			style={{
				backgroundColor: props.theme.bgColor,
				outline: `0.25rem solid ${props.theme.bgColor}`,
			}}
		>
			<div
				className="theme-bubbles__main-color"
				style={{ backgroundColor: props.theme.mainColor }}
			></div>
			<div
				className="theme-bubbles__sub-color"
				style={{ backgroundColor: props.theme.subColor }}
			></div>
			<div
				className="theme-bubbles__text-color"
				style={{ backgroundColor: props.theme.textColor }}
			></div>
		</div>
	)
}

