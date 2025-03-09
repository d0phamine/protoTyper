import { FC, RefObject, useEffect, useRef } from "react"

import { Check, Magnifier } from "@gravity-ui/icons"
import { Modal, TextInput } from "@gravity-ui/uikit"

import { ListElement, ThemeBubbles } from "@/components"
import { useFilteredThemes } from "@/hooks"

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
		// filteredThemes: useAppSelector(themeSwitcherSelectors.filteredThemes),
		currentTheme: useAppSelector(themeSwitcherSelectors.currentTheme),
		themeFilter: useAppSelector(themeSwitcherSelectors.themeFilter),
	}

	const { data: themes } = useGetThemesQuery()

	const filteredThemes = useFilteredThemes(themes, selector.themeFilter)

	useEffect(() => {
		dispatcher(themeSwitcherSlice.actions.initCurrentThemeAction())
		const link = document.createElement("link")
		link.rel = "stylesheet"
		link.href = `/themes/${selector.currentTheme}.css`
		link.id = "theme-stylesheet"

		document.head.appendChild(link)

		return () => {
			document.getElementById("theme-stylesheet")?.remove()
		}
	}, [selector.currentTheme])

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
			onTransitionOutComplete={() =>
				dispatcher(themeSwitcherSlice.actions.themeFilterAction(""))
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
						filteredThemes.map((theme: Theme) => (
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

