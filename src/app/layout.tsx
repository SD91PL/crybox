import type { Metadata, Viewport } from 'next'
import './globals.css'
import { StoreProvider } from '@/store/StoreProvider'

export const metadata: Metadata = {
	title: 'Crybox',
	description:
		'Modification Improving Xbox Controller Support for Crysis and Crysis Warhead (GOG.com versions)',
}

export const viewport: Viewport = {
	themeColor: '#212121',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<StoreProvider>
			<html
				lang='en'
				className='scroll-smooth selection:bg-[#a5a5a57c]'
				data-scroll-behavior='smooth'>
				<body className='font-sans antialiased'>
					<div className='flex flex-col gap-4 bg-white'>{children}</div>
				</body>
			</html>
		</StoreProvider>
	)
}
