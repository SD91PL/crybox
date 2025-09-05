import Image from 'next/image'

export default function Download() {
	return (
		<section
			id='download'
			className='flex-1 h-dvh xl:sticky xl:top-0 flex flex-col justify-center items-center'>
			<div className='max-w-[23.2rem] mt-20 xl:mt-0'>
				<Image
					src='/img/download/download.png'
					alt='Download Crybox'
					width={371}
					height={99}
				/>
				<p className='text-right text-xs text-[#767676] px-0.5 pt-2.5'>
					Total Downloads: TEST
				</p>
				<p className='text-right text-xs text-[#767676] px-0.5 pt-2.5'>
					Download will be available once the backend is ready.
				</p>
			</div>
		</section>
	)
}
