import { FC } from "react"

import { Palette, Tag } from "@gravity-ui/icons"

import { SubButton } from "@/components"
import { ThemeSwitcher } from "@/features"

import { toggleThemeSwitcherOpenAction } from "@/store/FeatureStore"
import { themeSwitcherSelectors } from "@/store/ThemeSwitcher"
import { useAppDispatch, useAppSelector } from "@/store/hooks"

import "./index.scss"

export const AppFooter: FC = () => {
	const dispatcher = useAppDispatch()
	const selector = {
		currentTheme: useAppSelector(themeSwitcherSelectors.currentTheme),
	}
	return (
		<div className="app-footer">
			<ThemeSwitcher />
			<div className="app-footer__left"></div>
			<div className="app-footer__right">
				<SubButton
					title={selector.currentTheme}
					icon={<Palette />}
					onClick={() => dispatcher(toggleThemeSwitcherOpenAction())}
				/>
				<SubButton title="1.0.0" icon={<Tag />} />
			</div>
		</div>
	)
}

