'use client'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '@/store/store'
import { toggleTheme } from '@/store/features/themeSlice'
import Image from 'next/image'

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
			className='fixed top-3 right-3 xl:absolute xl:top-5 xl:right-5 fade-in-right z-50'>
			<Image
				src='/img/darkmode/night_vision.png'
				alt='Toggle Dark Mode Button'
				width={290}
				height={42}
				className='hidden xl:block min-w-[18.125rem] min-h-[2.625rem] opacity-90'
			/>
			<div className='xl:hidden p-1.5 bg-gray-200 dark:bg-gray-800 text-xl grayscale invert -skew-x-10'>
				<div className='skew-x-10 text-sm'>
					{theme === 'dark' ? '☀️' : '🌙'}
				</div>
			</div>
		</button>
	)
}
