import { FC, useState } from "react"

import { Table, TableProps } from "antd"

import { useGetUsersAdminQuery } from "@/api"

// import { useAppDispatch, useAppSelector } from "@/store/hooks"

import "./index.scss"

export const LessonsTable: FC = () => {
	// const dispatcher = useAppDispatch()
	// const selector = {
	// 	currentTheme: useAppSelector(themeSwitcherSelectors.currentTheme),
	// }
	interface DataType {
		key: React.Key
		username: string
		lessonsCount?: number
		avgWPM?: number
	}

	const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])

	const columns = [
		{
			title: "lesson",
			dataIndex: "username",
			key: "username",
		},
		{
			title: "lessonsCount",
			dataIndex: "lessonsCount",
			key: "lessonsCount",
		},
		{
			title: "avgWPM",
			dataIndex: "avgWPM",
			key: "avgWPM",
		},
	]

	const { data: users } = useGetUsersAdminQuery()

	const dataSource = users
		? users.map((user) => {
				return { key: user.id, ...user }
			})
		: []

	const rowSelection: TableProps<DataType>["rowSelection"] = {
		selectedRowKeys,
		type: "checkbox",
	}

	return (
		<div className="lessons-table">
			<Table
				dataSource={dataSource}
				rowSelection={rowSelection}
				columns={columns}
				bordered={true}
				style={{ minWidth: 600 }}
				pagination={{ position: ["bottomCenter"] }}
			/>
		</div>
	)
}
