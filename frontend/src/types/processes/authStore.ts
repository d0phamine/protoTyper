export interface IAuthStore {
	user: User | null
	authToken: string | null
	isAuth: boolean
}

export interface User {
	id: number
	username: string
}

export interface UserCredentials {
	username: string
	password: string
}

