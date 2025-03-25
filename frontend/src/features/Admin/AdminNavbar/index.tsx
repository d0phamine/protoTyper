import { FC } from "react"

import { At } from "@gravity-ui/icons"

import { setCurrentViewEntityAction } from "@/store/AdminStore"
import { useAppDispatch } from "@/store/hooks"

import { SubButton } from "@/components"

import "./index.scss"

export const AdminNavbar: FC = () => {
	const dispatcher = useAppDispatch()
	return (
		<div className="admin-navbar">
			<div className="admin-navbar__entities">
				<SubButton
					title={"Users"}
					icon={<At />}
					setActive
					onClick={() =>
						dispatcher(setCurrentViewEntityAction("users"))
					}
				/>
			</div>
			<div className="admin-navbar__spacer"></div>
			<div className="admin-navbar__entities">
				<SubButton
					title={"Lessons"}
					icon={<At />}
					setActive
					onClick={() =>
						dispatcher(setCurrentViewEntityAction("lessons"))
					}
				/>
			</div>
		</div>
	)
}
