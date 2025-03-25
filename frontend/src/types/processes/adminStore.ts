export type EntityType = "users" | "lessons"

export interface IAdminStore {
	currentViewEntity: string
}
export interface UserAdmin {
	id: number
	username: string
	lessonsCount?: number
	avgWPM?: number
}

