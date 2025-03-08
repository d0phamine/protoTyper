export type Theme = {
	name: string
	bgColor: string
	mainColor: string
	subColor: string
	textColor: string
}

export interface IThemeSwitcherState {
	themes: Theme[]
	currentTheme: string
	themeSwitcherOpen: boolean
	themeFilter: string
}
