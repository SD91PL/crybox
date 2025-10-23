import type { Metadata, Viewport } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import H1 from '@/UI/H1'

export const metadata: Metadata = {
	title: 'Crybox - Customize',
	description:
		'Customize Xbox Controller Mapping and Gameplay for Crysis and Crysis Warhead (GOG.com versions)',
}

export const viewport: Viewport = {
	themeColor: '#212121',
}

export default function CustomizeLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className='flex flex-col gap-4 bg-white container justify-start items-center min-h-dvh'>
			<Link href='/#download'>
				<Image
					src='/img/ui/back/back.png'
					alt='back'
					width={48}
					height={48}
					className='fixed top-2 left-2 right-4 max-w-8 max-h-8 sm:max-w-10 sm:max-h-10 md:max-w-12 md:max-h-12 fade-in-right z-50'
				/>
			</Link>
			<H1 center>Customize Controller and Gameplay Settings</H1>
			<h2 className='text-blue-600'>
				Unfinished section | Work in progress...
			</h2>
			{children}
		</div>
	)
}
