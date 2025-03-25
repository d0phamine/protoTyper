import { FC, ReactNode, Ref } from "react"

import "./index.scss"

export interface IListElementProps {
	title: string
	startContent?: ReactNode
	endContent?: ReactNode
	onClick?: () => void
	active?: boolean
	ref?:Ref<HTMLDivElement>
}

export const ListElement: FC<IListElementProps> = (props) => {
	return (
		<div
			className={`${props.active ? "list-element active" : "list-element"}`}
			onClick={props.onClick}
			ref={props.ref}
		>
			<div className="list-element__start-content">
				{props.startContent}
			</div>
			<div className="list-element__title">{props.title}</div>
			<div className="list-element__end-content">{props.endContent}</div>
		</div>
	)
}
