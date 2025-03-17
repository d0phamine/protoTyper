import { FC } from "react"

import {
	BookOpen,
	LayoutHeaderCellsLargeThunderbolt,
	Palette,
	Person,
	Tag,
} from "@gravity-ui/icons"

import { SubButton } from "@/components"
import {
	LessonsDrawer,
	MainConfigurator,
	MainTextArea,
	ThemeSwitcher,
} from "@/features"
import { MainLayout } from "@/layouts/MainLayout"

import { featureStoreSlice } from "@/store/FeatureStore"
import {
	themeSwitcherSelectors,
} from "@/store/ThemeSwitcher"
import { useAppDispatch, useAppSelector } from "@/store/hooks"

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
						<SubButton icon={<Person />} style={{ gap: 0 }} />
						<SubButton
							icon={<BookOpen />}
							style={{ gap: 0 }}
							onClick={() =>
								dispatcher(
									featureStoreSlice.actions.toggleLessonsDrawerOpenAction(),
								)
							}
						/>
					</div>
					<ThemeSwitcher />
				</div>
				<div className="main-page__content content-grid">
					<MainConfigurator />
					<MainTextArea />
					<LessonsDrawer />
				</div>
				<div className="main-page__footer">
					<div className="footer-left"></div>
					<div className="footer-right">
						<SubButton
							title={selector.currentTheme}
							icon={<Palette />}
							onClick={() =>
								dispatcher(
									featureStoreSlice.actions.toggleThemeSwitcherOpenAction(),
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
