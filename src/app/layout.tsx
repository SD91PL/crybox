import type { Metadata, Viewport } from 'next'
import './globals.css'
import { StoreProvider } from '@/store/StoreProvider'
import DarkModeToggle from '@/UI/DarkModeToggle'

export const metadata: Metadata = {
	title: {
		default: 'Crybox',
		template: 'Crybox - %s',
	},
	description:
		'Modification Improving Xbox Controller Support for Crysis and Crysis Warhead (GOG.com versions)',
	keywords: [
		'Crybox',
		'Crysis Xbox controller',
		'Crysis Warhead Xbox controller',
		'Crysis controller mapping',
		'Crysis controller support',
		'Crysis controller fix',
		'Xbox controller Crysis',
		'Crysis gamepad fix',
		'Crysis mod',
		'Crysis Warhead mod',
		'Crysis configuration',
	],
	authors: [{ name: 'SD91PL', url: 'https://github.com/SD91PL' }],
	creator: 'SD91PL',
	publisher: 'SD91PL',
	metadataBase: new URL('https://crybox.vercel.app'),
	alternates: {
		canonical: 'https://crybox.vercel.app',
	},
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
					<DarkModeToggle />
					<div className='flex flex-col gap-4 bg-white'>{children}</div>
				</body>
			</html>
		</StoreProvider>
	)
}
