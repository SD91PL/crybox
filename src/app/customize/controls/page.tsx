import Link from 'next/link'

import H2 from '@/UI/H2'

import ControlsForm from '@/components/customize/ControlsForm'

export default function CustomizeControls() {
	return (
		<>
			<div className='flex gap-16'>
				<Link href='/customize/controls'>
					<H2 center>
						<span className='underline underline-offset-8'>Controls</span>
					</H2>
				</Link>
				<Link href='/customize/gameplay'>
					<H2 center>Gameplay</H2>
				</Link>
			</div>
			<div className='mt-8 mb-16 px-1 flex flex-wrap w-full justify-center items-start grayscale'>
				<ControlsForm />
			</div>
		</>
	)
}
