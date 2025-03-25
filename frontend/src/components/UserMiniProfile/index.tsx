import { FC } from "react"

import "./index.scss"

interface IUserMiniProfileProps {
	username: string
	avatar?: string
	customClass?: string
	onClick?: () => void
}

export const UserMiniProfile: FC<IUserMiniProfileProps> = ({
	username,
	avatar,
	customClass,
	onClick,
}: IUserMiniProfileProps) => {
	return (
		<div
			className={`user-mini-profile ${customClass || ""}`}
			onClick={onClick}
		>
			<div className="user-mini-profile__avatar">
				{avatar ? <img src={avatar}></img> : username[0].toUpperCase()}
			</div>
			<div className="user-mini-profile__username">{username}</div>
		</div>
	)
}

