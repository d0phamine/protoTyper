import { FC, ReactNode } from "react"

import "./index.scss"

export interface subButtonProps {
	title?: string | null
	icon?: ReactNode | null
	style?: object
	customClass?: string
	onClick?: () => void
}

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
