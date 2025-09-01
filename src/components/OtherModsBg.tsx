import Image from 'next/image'

export default function OtherModsBg() {
	return (
		<section
			id='otherModsBg'
			className='order-1 xl:order-2 flex-1 flex flex-col justify-start items-center'>
			<Image
				src='/img/othermods/mobile.png'
				alt=''
				width={355}
				height={350}
				className='inline-block xl:hidden'
			/>
			<Image
				src='/img/othermods/desktop.png'
				alt=''
				width={705}
				height={944}
				className='hidden xl:inline-block xl:sticky xl:top-0'
			/>
		</section>
	)
}
