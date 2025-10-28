import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
	return (
		<div className='flex flex-col gap-4 bg-white container justify-center items-center min-h-dvh'>
			<Link href='/'>
				<Image
					src='/img/ui/back/back.png'
					alt='back'
					width={48}
					height={48}
					className='fixed top-2 left-2 right-4 max-w-8 max-h-8 sm:max-w-10 sm:max-h-10 md:max-w-12 md:max-h-12 fade-in-right z-50'
				/>
			</Link>
			<div className='flex flex-col justify-center items-center py-12 max-w-[21.25rem]'>
				<Link href='/'>
					<Image
						src='/img/notfound/return.png'
						alt='Return to Main Page'
						width={340}
						height={154}
					/>
				</Link>
				<Image
					src='/img/notfound/gamer.png'
					alt='Player wearing a nano-suit holding an Xbox controller'
					width={340}
					height={510}
				/>
			</div>
		</div>
	)
}
