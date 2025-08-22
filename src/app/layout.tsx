import type { Metadata } from 'next'
import './globals.css'
import { StoreProvider } from '@/store/StoreProvider'

export const metadata: Metadata = {
	title: 'Crybox',
	description: 'Modification Improving Xbox Controller Support for Crysis and Crysis Warhead (GOG.com versions)',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<StoreProvider>
			<html lang='en'>
				<body
					className={`font-sans antialiased`}>
					{children}
				</body>
			</html>
		</StoreProvider>
	)
}
