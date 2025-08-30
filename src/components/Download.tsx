import Image from 'next/image'

export default function Download() {
	return (
		<section
			id='download'
			className='flex-1 h-dvh xl:sticky xl:top-0 flex flex-col justify-center items-center bg-white'>
			<div className='max-w-[23.2rem]'>
				<Image
					src='/img/download/download.png'
					alt='Download Crybox'
					width={371}
					height={99}
				/>
				<p className='text-right text-xs text-[#767676] px-0.5 pt-2.5'>
					Downloaded TEST times
				</p>
			</div>
		</section>
	)
}
