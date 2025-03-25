import { FC } from "react"

import { MainLayout } from "@/layouts/MainLayout"

import "./index.scss"

export const AdminPage: FC = () => {
	return (
		<MainLayout>
			<div className="admin-page content">
				<p>Admin </p>
			</div>
		</MainLayout>
	)
}
