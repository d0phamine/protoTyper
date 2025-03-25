import { useFilteredThemes } from "@/hooks"

import { ChangeEvent, FC, RefObject, useEffect, useRef } from "react"

import { Check } from "@gravity-ui/icons"

import { Modal } from "antd"

import { Theme } from "@/types/features"

import { useGetThemesQuery } from "@/api"

import {
	featureStoreSelectors,
	toggleThemeSwitcherOpenAction,
} from "@/store/FeatureStore"
import {
	initCurrentThemeAction,
	setActiveThemeIndexAction,
	setCurrentThemeAction,
	themeFilterAction,
	themeSwitcherSelectors,
} from "@/store/ThemeSwitcher"
import { useAppDispatch, useAppSelector } from "@/store/hooks"

import { CustomInput, ListElement, ThemeBubbles } from "@/components"

import "./index.scss"

export interface IThemeSwitcherProps {
	propContainer?: RefObject<HTMLDivElement | null>
}

export const ThemeSwitcher: FC<IThemeSwitcherProps> = () => {
	const activeElement = useRef<HTMLDivElement>(null)

	const dispatcher = useAppDispatch()
	const selector = {
		themeSwitcherOpen: useAppSelector(
			featureStoreSelectors.themeSwitcherOpen,
		),
		currentTheme: useAppSelector(themeSwitcherSelectors.currentTheme),
		themeFilter: useAppSelector(themeSwitcherSelectors.themeFilter),
		activeThemeIndex: useAppSelector(
			themeSwitcherSelectors.activeThemeIndex,
		),
	}

	const { data: themes } = useGetThemesQuery()

	const filteredThemes = useFilteredThemes(themes, selector.themeFilter)

	useEffect(() => {
		dispatcher(initCurrentThemeAction())

		const link = document.createElement("link")
		link.rel = "stylesheet"
		link.href = `/themes/${selector.currentTheme}.css`
		link.id = "theme-stylesheet"
		document.head.appendChild(link)

		const activeIndex =
			themes?.findIndex(
				(theme) => theme.name === selector.currentTheme,
			) ?? -1
		dispatcher(setActiveThemeIndexAction(activeIndex))

		return () => {
			document.getElementById("theme-stylesheet")?.remove()
		}
	}, [selector.currentTheme])

	return (
		<Modal
			className="theme-switcher"
			open={selector.themeSwitcherOpen}
			onCancel={() => dispatcher(toggleThemeSwitcherOpenAction())}
			afterOpenChange={() => {
				activeElement.current?.scrollIntoView({
					behavior: "smooth", // Плавный скролл
					block: "center", // Прокрутка так, чтобы элемент был в центре
				})
			}}
			afterClose={() => dispatcher(themeFilterAction(""))}
			closable={false}
			footer={false}
		>
			<div className="theme-switcher__content">
				<div className="content-filter">
					<CustomInput
						placeholder="Search..."
						variant="borderless"
						hasClear
						size="large"
						onChange={(e: ChangeEvent) => {
							dispatcher(
								themeFilterAction(
									(e.target as HTMLInputElement).value,
								),
							)
						}}
					/>
				</div>
				<div className="content-theme-list">
					{themes &&
						filteredThemes.map((theme: Theme) => {
							return (
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
											setCurrentThemeAction(theme.name),
										)
									}
									ref={
										theme.name === selector.currentTheme
											? activeElement
											: null
									}
								/>
							)
						})}
				</div>
			</div>
		</Modal>
	)
}
