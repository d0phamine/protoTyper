import { FC } from "react"

import {
	BookOpen,
	LayoutHeaderCellsLargeThunderbolt,
	Person,
} from "@gravity-ui/icons"

import { SubButton } from "@/components"

import { featureStoreSlice } from "@/store/FeatureStore"
import { useAppDispatch } from "@/store/hooks"

import "./index.scss"

export const AppHeader: FC = () => {
    const dispatcher = useAppDispatch()
	return (
		<div className="app-header">
			<div className="app-header__logo">
				<LayoutHeaderCellsLargeThunderbolt />
				<h2>protoTyper</h2>
			</div>
			<div className="app-header__menu">
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
		</div>
	)
}
