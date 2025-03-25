import { FC } from "react"

import { adminStoreSelectors } from "@/store/AdminStore"
import { useAppSelector } from "@/store/hooks"

import { AdminNavbar } from "@/features/Admin/AdminNavbar"
import { LessonsTable } from "@/features/Admin/LessonsTable"
import { UsersTable } from "@/features/Admin/UsersTable"

import { MainLayout } from "@/layouts/MainLayout"

import "./index.scss"

export const AdminPage: FC = () => {
	const selector = {
		entityName: useAppSelector(adminStoreSelectors.currentViewEntity),
	}
	const getViewedTable = () => {
		switch (selector.entityName) {
			case "users":
				return <UsersTable />
			case "lessons":
				return <LessonsTable />
			default:
				return "default"
		}
	}

	return (
		<MainLayout>
			<div className="admin-page content-grid full-width">
				<AdminNavbar />
				{getViewedTable()}
			</div>
		</MainLayout>
	)
}
