import { FC, ReactNode, useState } from "react"

import "./index.scss"

export interface subButtonProps {
	title?: string | null
	icon?: ReactNode | null
	style?: object
	customClass?: string
	bold?: boolean
	onClick?: () => void
	setActive?: boolean
}

export const SubButton: FC<subButtonProps> = (props) => {
	const [active, setActive] = useState(false)
	return (
		<div
			className={`sub-button ${props.customClass || ""}${active ? "active" : ""} ${props.bold ? "bold" : ""}`}
			style={props.style}
			onClick={() => {
				if (props.onClick) props.onClick()
				if (props.setActive) setActive(!active)
			}}
		>
			<div className="sub-button__icon">{props.icon}</div>
			<div className="sub-button__title">
				<p>{props.title}</p>
			</div>
		</div>
	)
}
