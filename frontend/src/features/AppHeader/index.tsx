import { FC } from "react"
import { useNavigate } from "react-router-dom"

import {
	ArrowRightFromSquare,
	BookOpen,
	LayoutHeaderCellsLargeThunderbolt,
	Person,
} from "@gravity-ui/icons"

import { Skeleton } from "antd"

import { useGetUserProfileQuery } from "@/api"

import { authStoreSelectors, logoutThunk } from "@/store/AuthStore"
import { toggleLessonsDrawerOpenAction } from "@/store/FeatureStore"
import { useAppDispatch, useAppSelector } from "@/store/hooks"

import { LessonsDrawer } from "@/features/LessonsDrawer"

import { SubButton, UserMiniProfile } from "@/components"

import "./index.scss"

export const AppHeader: FC = () => {
	const navigate = useNavigate()
	const dispatcher = useAppDispatch()
	const selector = {
		isAuth: useAppSelector(authStoreSelectors.isAuth),
	}

	const { data: userProfile } = useGetUserProfileQuery(undefined, {
		skip: !selector.isAuth,
	})

	return (
		<div className="app-header">
			<div className="app-header__logo" onClick={() => navigate("/")}>
				<LayoutHeaderCellsLargeThunderbolt />
				<h2>protoTyper</h2>
			</div>
			<div className="app-header__nav-menu">
				<SubButton
					icon={<BookOpen />}
					style={{ gap: 0 }}
					onClick={() => dispatcher(toggleLessonsDrawerOpenAction())}
				/>
			</div>
			<div className="app-header__service-menu">
				{!selector.isAuth ? (
					<SubButton
						icon={<Person />}
						style={{ gap: 0 }}
						onClick={() => navigate("/auth")}
					/>
				) : userProfile ? (
					<>
						<UserMiniProfile
							username={userProfile ? userProfile?.username : ""}
						/>
						<SubButton
							icon={<ArrowRightFromSquare />}
							style={{ gap: 0 }}
							onClick={() => dispatcher(logoutThunk())}
						/>
					</>
				) : (
					<div className="gap-row-6">
						<Skeleton.Input active size="small" />
						<Skeleton.Avatar
							active
							size="small"
							shape="square"
							style={{ borderRadius: "6px" }}
						/>
					</div>
				)}

				<LessonsDrawer />
			</div>
		</div>
	)
}
