import { FC } from "react"

import { MainTextArea } from "@/features"
import { MainLayout } from "@/layouts/MainLayout"

import "./index.scss"

export const LessonsPage: FC = () => {
	return (
		<MainLayout>
			<div className="lessons-page content-grid full-width">
				<div></div>
				<MainTextArea />
			</div>
		</MainLayout>
	)
}

