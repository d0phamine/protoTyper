import { FC, useState } from "react"

import {
	BookOpen,
	LayoutHeaderCellsLargeThunderbolt,
	Palette,
	Person,
	Tag,
} from "@gravity-ui/icons"

import { SubButton } from "@/components"
import { MainLayout } from "@/layouts/MainLayout"

import { ThemeSwitcher } from "@/features/ThemeSwitcher"

import "./index.scss"

export const MainPage: FC = () => {
	const [textSwitcherOpen, setTextSwitcherOpen] = useState(false)
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
					<ThemeSwitcher
						open={textSwitcherOpen}
						setClose={() => setTextSwitcherOpen(!textSwitcherOpen)}
					/>
				</div>
				<div className="main-page__content content-grid"></div>
				<div className="main-page__footer">
					<div className="footer-left"></div>
					<div className="footer-right">
						<SubButton
							title="themes"
							icon={<Palette />}
							onClick={() =>
								setTextSwitcherOpen(!textSwitcherOpen)
							}
						/>
						<SubButton title="1.0.0" icon={<Tag />} />
					</div>
				</div>
			</div>
		</MainLayout>
	)
}
