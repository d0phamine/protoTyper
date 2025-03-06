import { FC } from "react"

import { subButtonProps } from "@/types/components"

import "./index.scss"

export const SubButton: FC<subButtonProps> = (props) => {
	return (
		<div
			className={`sub-button ${props.customClass || ""}`}
			style={props.style}
            onClick={props.onClick}
		>
			<div className="sub-button__icon">{props.icon}</div>
			<div className="sub-button__title">
				<p>{props.title}</p>
			</div>
		</div>
	)
}
