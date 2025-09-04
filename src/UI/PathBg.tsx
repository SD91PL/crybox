'use client'

import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import type { RootState } from '@/store/store'

type PathBgProps = {
	children: React.ReactNode
	className?: string
}

export default function PathBg({ children, className = '' }: PathBgProps) {
	const [mounted, setMounted] = useState(false)
	const theme = useSelector((state: RootState) => state.theme.mode)

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) return <div className={className}>{children}</div>

	return (
		<div className={`${className} ${theme === 'dark' ? 'invert' : ''}`}>
			{children}
		</div>
	)
}
