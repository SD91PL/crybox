import Image from 'next/image'
import H1 from '@/UI/H1'

export default function Mapping() {
	return (
		<section
			id='mapping'
			className='container flex flex-col justify-center items-center'>
			<div className='relative xl:hidden'>
				<H1 center>Controller Layout</H1>
				<Image
					src='/img/mapping/controller_layout.png'
					alt='controller layout'
					width={1440}
					height={1080}
				/>
				<H1 center>Alternative Layout</H1>
				<Image
					src='/img/mapping/alternative_layout.png'
					alt='alternative layout'
					width={1440}
					height={1080}
				/>
			</div>
			<div className='relative hidden xl:block max-h-dvh'>
				<Image
					src='/img/mapping/controller_layout.png'
					alt='controller layout'
					width={1440}
					height={1080}
					className='max-h-dvh w-auto'
				/>
				<Image
					src='/img/mapping/alternative_layout.png'
					alt='alternative layout'
					width={1440}
					height={1080}
					className='absolute top-0 fade-in-out max-h-dvh w-auto'
				/>
			</div>
		</section>
	)
}
