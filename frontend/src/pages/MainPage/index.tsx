import { FC } from "react"

import {
	BookOpen,
	LayoutHeaderCellsLargeThunderbolt,
	Palette,
	Person,
	Tag,
} from "@gravity-ui/icons"

import { SubButton } from "@/components"
import { MainLayout } from "@/layouts/MainLayout"

import {
	themeSwitcherSelectors,
	themeSwitcherSlice,
} from "@/store/ThemeSwitcher"
import { useAppDispatch, useAppSelector } from "@/store/hooks"

import { ThemeSwitcher, MainConfigurator } from "@/features"

import "./index.scss"

export const MainPage: FC = () => {
	const dispatcher = useAppDispatch()
	const selector = {
		currentTheme: useAppSelector(themeSwitcherSelectors.currentTheme),
	}
	return (
		<MainLayout>
			<div className="main-page content-grid">
				<div className="main-page__header">
					<div className="header-logo">
						<LayoutHeaderCellsLargeThunderbolt />
						<h2>protoTyper</h2>
					</div>
					<div className="header-menu">
						<Person />
						<BookOpen />
					</div>
					<ThemeSwitcher />
				</div>
				<div className="main-page__content content-grid">
					<MainConfigurator/>
				</div>
				<div className="main-page__footer">
					<div className="footer-left"></div>
					<div className="footer-right">
						<SubButton
							title={selector.currentTheme}
							icon={<Palette />}
							onClick={() =>
								dispatcher(
									themeSwitcherSlice.actions.toggleThemeSwitcherOpenAction(),
								)
							}
						/>
						<SubButton title="1.0.0" icon={<Tag />} />
					</div>
				</div>
			</div>
		</MainLayout>
	)
}
