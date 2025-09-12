import Image from 'next/image'
import Link from 'next/link'
import H1 from '@/UI/H1'

export default function Mapping() {
	return (
		<section
			id='mapping'
			className='container flex flex-col justify-center items-center overflow-x-hidden'>
			<div className='relative xl:hidden fade-in-right'>
				<H1 center>Controller Layout</H1>
				<div className='relative'>
					<Image
						src='/img/mapping/controller_layout.png'
						alt='controller layout'
						width={1200}
						height={900}
					/>
					<Link href='/controller-layout'>
						<Image
							src='/img/ui/zoom/zoom_in.png'
							alt='zoom in controller layout'
							width={48}
							height={48}
							className='absolute top-2 right-4 max-w-8 max-h-8 sm:max-w-10 sm:max-h-10 md:max-w-12 md:max-h-12'
						/>
					</Link>
				</div>
				<H1 center>Alternative Layout</H1>
				<div className='relative'>
					<Image
						src='/img/mapping/alternative_layout.png'
						alt='alternative layout'
						width={1200}
						height={900}
					/>
					<Link href='/alternative-layout'>
						<Image
							src='/img/ui/zoom/zoom_in.png'
							alt='zoom in alternative layout'
							width={48}
							height={48}
							className='absolute top-2 right-4 max-w-8 max-h-8 sm:max-w-10 sm:max-h-10 md:max-w-12 md:max-h-12'
						/>
					</Link>
				</div>
			</div>
			<div className='relative hidden xl:block max-h-dvh'>
				<Image
					src='/img/mapping/controller_layout.png'
					alt='controller layout'
					width={1200}
					height={900}
					className='max-h-dvh w-auto'
				/>
				<Image
					src='/img/mapping/alternative_layout.png'
					alt='alternative layout'
					width={1200}
					height={900}
					className='absolute top-0 fade-in-out max-h-dvh w-auto'
				/>
			</div>
		</section>
	)
}
