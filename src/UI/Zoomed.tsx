import Image from 'next/image'
import Link from 'next/link'

type ZoomedProps = {
	src: string
	alt: string
	width: number
	height: number
}

export default function Zoomed({ src, alt, width, height }: ZoomedProps) {
	return (
		<>
			<div className='overflow-scroll'>
				<Image
					src={src}
					alt={alt}
					width={width}
					height={height}
					priority
					style={{ minWidth: `${width}px`, minHeight: `${height}px` }}
					className='fade-in-right'
				/>
			</div>
			<Link href='/'>
				<Image
					src='/img/ui/back/back.png'
					alt='back'
					width={48}
					height={48}
					className='fixed top-2 left-2 max-w-12 max-h-12 fade-in-right z-50'
				/>
			</Link>
		</>
	)
}
