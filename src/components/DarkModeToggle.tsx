'use client'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '@/store/store'
import { toggleTheme } from '@/store/features/themeSlice'

export default function DarkModeToggle() {
	const dispatch = useDispatch<AppDispatch>()
	const theme = useSelector((state: RootState) => state.theme.mode)
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	useEffect(() => {
		const root = document.documentElement
		root.classList.toggle('dark', theme === 'dark')
	}, [theme])

	if (!mounted) {
		return null
	}

	return (
		<button
			onClick={() => dispatch(toggleTheme())}
			className='absolute top-3 right-3 min-[1640px]:fixed xl:top-5 xl:right-5 fade-in-right z-50'>
			<div className='p-1.5 bg-gray-200 dark:bg-gray-800 text-xl grayscale invert -skew-x-10'>
				<div className='skew-x-10 text-sm'>
					{theme === 'dark' ? '☀️' : '🌙'}
				</div>
			</div>
		</button>
	)
}
