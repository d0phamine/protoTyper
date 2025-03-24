import { useMemo } from "react"

import { Theme } from "@/types/features"

/**
 * Хук для фильтрации списка тем по введённому тексту.
 *
 * @param themes - массив тем
 * @param filter - строка для фильтрации
 * @returns отфильтрованный массив тем
 */
export const useFilteredThemes = (themes: Theme[] = [], filter: string) => {
	return useMemo(() => {
		return themes.filter((theme) =>
			theme.name.toLowerCase().includes(filter.toLowerCase()),
		)
	}, [themes, filter])
}
