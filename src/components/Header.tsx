import Image from 'next/image'

export default function Header() {
	return (
		<section
			id='header'
			className='container h-dvh relative flex flex-col justify-center items-center'>
			<Image
				src='/img/header/crybox_logo.png'
				alt='Crybox - Maximum Control'
				fill
				priority
				className='object-contain fade-in-top'
			/>
			<div className='absolute bottom-2 xl:bottom-10 h-1/3 w-full flex flex-col justify-center items-center fade-in-bottom'>
				<a
					href='#mapping'
					className='min-w-[max(160px,14%)] min-h-[68px]'>
					<Image
						src='/img/header/engage.png'
						alt='Engage'
						width={160}
						height={68}
						priority
						className='w-full h-full'
					/>
				</a>
			</div>
		</section>
	)
}
