'use client'

import { useState } from 'react'

type PathBtnProps = {
	textToCopy: string
}

export default function PathBtn({ textToCopy }: PathBtnProps) {
	const [copied, setCopied] = useState(false)

	const copyToClipboard = async () => {
		try {
			await navigator.clipboard.writeText(textToCopy)
			setCopied(true)
			setTimeout(() => setCopied(false), 1000)
		} catch (err) {
			console.error('Failed to copy!', err)
		}
	}

	return (
		<button
			onClick={copyToClipboard}
			className='ml-3 p-1 text-sm text-[#c0c0c0] bg-[#6a6a6a] rounded hover:bg-[#757575] transition-colors'>
			{copied ? (
				<img
					src='/img/ui/path/bxs_copy.svg'
					alt='Copied'
					className='min-w-4 min-h-4'
				/>
			) : (
				<img
					src='/img/ui/path/bx_copy.svg'
					alt='Copy'
					className='min-w-4 min-h-4'
				/>
			)}
		</button>
	)
}
