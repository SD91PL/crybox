import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Theme = 'light' | 'dark'

interface ThemeState {
	mode: Theme
}

const getInitialTheme = (): Theme => {
	if (typeof window !== 'undefined') {
		// 1. check localStorage
		const stored = localStorage.getItem('theme') as Theme | null
		if (stored) return stored

		// 2. check system preferences
		return window.matchMedia('(prefers-color-scheme: dark)').matches
			? 'dark'
			: 'light'
	}
	return 'light' // fallback for SSR
}

const initialState: ThemeState = {
	mode: getInitialTheme(),
}

const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		toggleTheme: state => {
			state.mode = state.mode === 'dark' ? 'light' : 'dark'
			if (typeof window !== 'undefined')
				localStorage.setItem('theme', state.mode)
		},
		setTheme: (state, action: PayloadAction<Theme>) => {
			state.mode = action.payload
			if (typeof window !== 'undefined')
				localStorage.setItem('theme', state.mode)
		},
	},
})

export const { toggleTheme, setTheme } = themeSlice.actions
export default themeSlice.reducer
