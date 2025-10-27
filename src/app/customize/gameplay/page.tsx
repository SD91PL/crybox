import Link from 'next/link'

import H2 from '@/UI/H2'
import DiffForm from '@/components/customize/DiffForm'
import SystemForm from '@/components/customize/SystemForm'

export const metadata = {
	alternates: {
		canonical: 'https://crybox.vercel.app/customize/gameplay',
	},
}

export default function CustomizeGameplay() {
	return (
		<>
			<div className='flex gap-16'>
				<Link href='/customize/controls'>
					<H2 center>Controls</H2>
				</Link>
				<Link href='/customize/gameplay'>
					<H2 center>
						<span className='underline underline-offset-8'>Gameplay</span>
					</H2>
				</Link>
			</div>
			<div className='mt-8 mb-16 px-1 flex flex-wrap gap-x-32 gap-y-16 w-full justify-center items-start grayscale'>
				<SystemForm />
				<DiffForm />
			</div>
		</>
	)
}
