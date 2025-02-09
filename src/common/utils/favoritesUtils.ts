const FAVORITES_KEY = 'favoriteCharacters'

// Получение избранных персонажей из localStorage
export const getFavorites = (): number[] => {
  const stored = localStorage.getItem(FAVORITES_KEY)
  return stored ? JSON.parse(stored) : []
}

// Сохранение избранных персонажей в localStorage
export const saveFavorites = (favorites: number[]) => {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))
}
