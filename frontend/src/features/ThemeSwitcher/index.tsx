import { FC, RefObject } from "react"

import { Modal } from "@gravity-ui/uikit"

import "./index.scss"

export interface IThemeSwitcherProps {
	propContainer?: RefObject<HTMLDivElement | null>
	open: boolean
	setClose: () => void
}

export const ThemeSwitcher: FC<IThemeSwitcherProps> = (props) => {
	return (
		<Modal
			className="theme-switcher"
			open={props.open}
			onOpenChange={() => props.setClose()}
			container={props.propContainer?.current || undefined}
		>
			<div className="theme-switcher__content"></div>
		</Modal>
	)
}

