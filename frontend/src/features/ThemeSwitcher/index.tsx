import { FC, RefObject, useEffect, useRef } from "react"

import { Check } from "@gravity-ui/icons"
import { List, Modal } from "@gravity-ui/uikit"

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
	const inputRef = useRef<List<Theme>>(null)

	const dispatcher = useAppDispatch()
	const selector = {
		themeSwitcherOpen: useAppSelector(
			themeSwitcherSelectors.themeSwitcherOpen,
		),
		currentTheme: useAppSelector(themeSwitcherSelectors.currentTheme),
		themeFilter: useAppSelector(themeSwitcherSelectors.themeFilter),
		activeThemeIndex: useAppSelector(
			themeSwitcherSelectors.activeThemeIndex,
		),
	}

	const { data: themes } = useGetThemesQuery()

	// const filteredThemes = useFilteredThemes(themes, selector.themeFilter)

	useEffect(() => {
		dispatcher(themeSwitcherSlice.actions.initCurrentThemeAction())
		
		const link = document.createElement("link")
		link.rel = "stylesheet"
		link.href = `/themes/${selector.currentTheme}.css`
		link.id = "theme-stylesheet"
		document.head.appendChild(link)

		const activeIndex =
			themes?.findIndex(
				(theme) => theme.name === selector.currentTheme,
			) ?? -1
		dispatcher(
			themeSwitcherSlice.actions.setActiveThemeIndexAction(activeIndex),
		)

		return () => {
			document.getElementById("theme-stylesheet")?.remove()
		}
	}, [selector.currentTheme])

	return (
		<Modal
			className="theme-switcher"
			open={selector.themeSwitcherOpen}
			onOpenChange={() =>
				dispatcher(
					themeSwitcherSlice.actions.toggleThemeSwitcherOpenAction(),
				)
			}
			onTransitionInComplete={() => {
				inputRef.current?.activateItem(selector.activeThemeIndex)
				inputRef.current?.refFilter.current.focus()
			}}
			onTransitionOutComplete={() =>
				dispatcher(themeSwitcherSlice.actions.themeFilterAction(""))
			}
			container={props.propContainer?.current || undefined}
		>
			<div className="theme-switcher__content">
				<List
					items={themes && themes.map((theme: Theme) => theme)}
					renderItem={(item) => {
						return (
							<ListElement
								key={item.name}
								title={item.name}
								active={
									item.name === selector.currentTheme
										? true
										: false
								}
								startContent={
									item.name === selector.currentTheme ? (
										<Check />
									) : null
								}
								endContent={<ThemeBubbles theme={item} />}
							/>
						)
					}}
					filterItem={(filter) => (item) =>
						item.name.includes(filter)
					}
					filterPlaceholder={"Search..."}
					onItemClick={(item) =>
						dispatcher(
							themeSwitcherSlice.actions.setCurrentThemeAction(
								item.name,
							),
						)
					}
					itemsHeight={(items: Theme[]) => items.length * 28}
					ref={inputRef}
				/>
			</div>
		</Modal>
	)
}

