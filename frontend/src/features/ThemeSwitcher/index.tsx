import { FC, RefObject } from "react"

import { Magnifier } from "@gravity-ui/icons"

import { Modal, TextInput } from "@gravity-ui/uikit"

import { useGetThemesQuery } from "@/api"

import { Theme } from "@/types/features"

import {
	themeSwitcherSelectors,
	themeSwitcherSlice,
} from "@/store/ThemeSwitcher"
import { useAppDispatch, useAppSelector } from "@/store/hooks"

import { ListElement } from "@/components/ListElement"

import "./index.scss"

export interface IThemeSwitcherProps {
	propContainer?: RefObject<HTMLDivElement | null>
}

export const ThemeSwitcher: FC<IThemeSwitcherProps> = (props) => {
	const dispatcher = useAppDispatch()
	const selector = {
		themeSwitcherOpen: useAppSelector(
			themeSwitcherSelectors.themeSwitcherOpen,
		),
	}
	const { data:themes } = useGetThemesQuery()
	return (
		<Modal
			className="theme-switcher"
			open={selector.themeSwitcherOpen}
			onOpenChange={() =>
				dispatcher(
					themeSwitcherSlice.actions.toggleThemeSwitcherOpenAction(),
				)
			}
			container={props.propContainer?.current || undefined}
		>
			<div className="theme-switcher__content">
				<div className="content-search">
					<div className="content-search__icon">
						<Magnifier />
					</div>
					<TextInput
						className="content-search__text-input"
						view="clear"
					/>
				</div>
				<div className="content-theme-list">
					{themes && themes.map((theme:Theme) => (
						<ListElement
							key={theme.name}
							title={theme.name}/>)
					)}
                </div>
			</div>
		</Modal>
	)
}

