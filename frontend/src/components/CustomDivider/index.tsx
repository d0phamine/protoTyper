import { FC, ReactNode } from "react"

import "./index.scss"

interface ICustomDividerProps {
	content: string | ReactNode
}

export const CustomDivider: FC<ICustomDividerProps> = ({
	content,
}: ICustomDividerProps) => {
	return (
		<div className="custom-divider">
			<div className="custom-divider__line"></div>
			<div className="custom-divider__content">{content}</div>
			<div className="custom-divider__line"></div>
		</div>
	)
}
