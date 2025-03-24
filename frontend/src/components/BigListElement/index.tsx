import { FC, ReactNode, useState } from "react"

import "./index.scss"

interface IBigListElementProps {
	setActive?: boolean
	title: string
	endContent?: ReactNode
	description?: ReactNode | string
	onClick?: () => void
}

export const BigListElement: FC<IBigListElementProps> = (props) => {
	const [active, setActive] = useState(false)
	return (
		<div
			className={`big-list-element ${active ? "active" : ""}`}
			onClick={() => {
				if (props.onClick) props.onClick()
				if (props.setActive) setActive(!active)
			}}
		>
			<div className="big-list-element__status-bar"></div>
			<div className="big-list-element__content">
				<div className="content-header">
					<p>{props.title}</p>
				</div>
				<div className="content-description">{props.description}</div>
			</div>
			<div className="big-list-element__end-content">
				{props.endContent}
			</div>
		</div>
	)
}
