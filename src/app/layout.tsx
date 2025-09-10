import type { Metadata } from 'next'
import './globals.css'
import { StoreProvider } from '@/store/StoreProvider'

export const metadata: Metadata = {
	title: 'Crybox',
	description:
		'Modification Improving Xbox Controller Support for Crysis and Crysis Warhead (GOG.com versions)',
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
				<body className='font-sans antialiased flex flex-col gap-2.5'>
					{children}
				</body>
			</html>
		</StoreProvider>
	)
}
