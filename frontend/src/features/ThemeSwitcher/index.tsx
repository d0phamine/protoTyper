import { FC, RefObject, useRef } from "react"

import { Check, Magnifier } from "@gravity-ui/icons"
import { Modal, TextInput } from "@gravity-ui/uikit"

import { ListElement, ThemeBubbles } from "@/components"

import { Theme } from "@/types/features"

import { useGetThemesQuery } from "@/api"

import {
	themeSwitcherSelectors,
	themeSwitcherSlice,
} from "@/store/ThemeSwitcher"
import { useAppDispatch, useAppSelector } from "@/store/hooks"

import "./index.scss"

export interface IThemeSwitcherProps {
	propContainer?: RefObject<HTMLDivElement | null>
}

export const ThemeSwitcher: FC<IThemeSwitcherProps> = (props) => {
	const inputRef = useRef<HTMLInputElement | null>(null)
	const dispatcher = useAppDispatch()
	const selector = {
		themeSwitcherOpen: useAppSelector(
			themeSwitcherSelectors.themeSwitcherOpen,
		),
		filteredThemes: useAppSelector(themeSwitcherSelectors.filteredThemes),
		currentTheme: useAppSelector(themeSwitcherSelectors.currentTheme),
	}
	const { data: themes } = useGetThemesQuery()
	return (
		<Modal
			className="theme-switcher"
			open={selector.themeSwitcherOpen}
			initialFocus={inputRef}
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
						onChange={(e) =>
							dispatcher(
								themeSwitcherSlice.actions.themeFilterAction(
									e.target.value,
								),
							)
						}
						ref={inputRef}
					/>
				</div>
				<div className="content-theme-list">
					{themes &&
						selector.filteredThemes.map((theme: Theme) => (
							<ListElement
								key={theme.name}
								title={theme.name}
								active={
									theme.name === selector.currentTheme
										? true
										: false
								}
								startContent={
									theme.name === selector.currentTheme ? (
										<Check />
									) : null
								}
								endContent={<ThemeBubbles theme={theme} />}
								onClick={() =>
									dispatcher(
										themeSwitcherSlice.actions.setCurrentThemeAction(
											theme.name,
										),
									)
								}
							/>
						))}
				</div>
			</div>
		</Modal>
	)
}

