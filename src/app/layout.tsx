import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import './globals.css'
import { StoreProvider } from '@/store/StoreProvider'
import DarkModeToggle from '@/UI/DarkModeToggle'

export const metadata: Metadata = {
	title: {
		default: 'Crybox',
		template: 'Crybox - %s',
	},
	description:
		'Crybox - Enhanced Xbox Controller Support for Crysis and Crysis Warhead. Intuitive button mappings and optimized configurations for GOG versions.',
	keywords: [
		'Crybox',
		'Crysis Xbox controller',
		'Crysis Warhead controller',
		'Crysis mod',
		'Xbox controller fix Crysis',
	],
	authors: [{ name: 'SD91PL', url: 'https://github.com/SD91PL' }],
	creator: 'SD91PL',
	publisher: 'SD91PL',
	metadataBase: new URL('https://crybox.vercel.app'),
	alternates: {
		canonical: '/',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	openGraph: {
		title: 'Crybox - Xbox Controller Fix for Crysis',
		description:
			'Crybox - Enhanced Xbox Controller Support for Crysis and Crysis Warhead. Intuitive button mappings and optimized configurations for GOG versions.',
		url: '/',
		siteName: 'Crybox',
		images: [
			{
				url: '/img/meta/crybox.webp',
				width: 1200,
				height: 630,
				alt: 'Crybox - Xbox controller support for Crysis',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Crybox - Xbox Controller Fix for Crysis',
		description:
			'Enhanced Xbox Controller Support for Crysis and Crysis Warhead. Intuitive button mappings and optimized for GOG versions.',
		images: ['/img/meta/crybox.webp'],
	},
}

export const viewport: Viewport = { themeColor: '#212121' }

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'SoftwareApplication',
		name: 'Crybox',
		applicationCategory: 'GameApplication',
		operatingSystem: 'Windows',
		description:
			'Enhanced Xbox Controller Support for Crysis and Crysis Warhead',
		offers: {
			'@type': 'Offer',
			price: '0',
			priceCurrency: 'USD',
		},
		author: {
			'@type': 'Person',
			name: 'SD91PL',
			url: 'https://github.com/SD91PL',
		},
		url: 'https://crybox.vercel.app',
		downloadUrl: 'https://crybox.vercel.app',
		softwareVersion: '1.0',
		codeRepository: 'https://github.com/SD91PL/crybox',
	}

	return (
		<StoreProvider>
			<html
				lang='en'
				className='scroll-smooth selection:bg-[#a5a5a57c]'
				data-scroll-behavior='smooth'>
				<head>
					<Script
						id='json-ld-schema'
						type='application/ld+json'
						dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
						strategy='beforeInteractive'
					/>
				</head>
				<body className='font-sans antialiased'>
					<DarkModeToggle />
					<div className='flex flex-col gap-4 bg-white'>{children}</div>
				</body>
			</html>
		</StoreProvider>
	)
}
