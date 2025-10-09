import H2 from '@/UI/H2'
import DiffForm from '@/components/customize/DiffForm'
import SystemForm from '@/components/customize/SystemForm'

export default function CustomizeGameplay() {
	return (
		<>
			<H2 center>Gameplay</H2>
			<div className='mt-8 mb-16 px-1 flex flex-wrap gap-x-32 gap-y-16 w-full justify-center items-start '>
				<SystemForm />
				<DiffForm />
			</div>
		</>
	)
}
