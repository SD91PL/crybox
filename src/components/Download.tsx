import Image from 'next/image'
import P from '@/UI/P'

export default function Download() {
	return (
		<section
			id='download'
			className='flex-1 h-dvh xl:sticky xl:top-0 flex flex-col justify-center items-center'>
			<div className='max-w-[23.2rem] mt-20 xl:mt-0'>
				<a
					href='https://www.moddb.com/downloads/start/296599'
					target='_blank'
					rel='noopener'>
					<Image
						src='/img/download/download.png'
						alt='Download Crybox'
						width={371}
						height={99}
					/>
				</a>
				<div className='mt-2 mb-1.5 text-right'>
					<P>
						<span className='text-xs text-[#767676]'>
							Released Sep 11, 2025{' '}
						</span>
						<a
							href='https://www.moddb.com/mods/crybox/downloads/crybox-xbox-controller-support-for-crysis-and-crysis-warhead'
							target='_blank'
							rel='noopener'
							className='text-xs text-[#767676] px-0.5 py-2.5'>
							| ModDB Page |
						</a>
					</P>
				</div>
			</div>
		</section>
	)
}
