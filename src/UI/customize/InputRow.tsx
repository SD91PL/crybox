import { ResetLeftFill } from '@/UI/customize/ResetBtn'

interface InputRowProps {
	label: string
	children: React.ReactNode
	onReset?: () => void
}

export function InputRow({ label, children, onReset }: InputRowProps) {
	return (
		<div className='flex flex-row justify-between items-center px-2.5 py-2 bg-[#F5F5F5] border border-gray-300 rounded shadow-sm text-black'>
			<label className='block flex-1'>{label}</label>
			{children}
			{onReset && (
				<button
					type='button'
					aria-label='Reset'
					title='Reset'
					onClick={onReset}
					className='group block pl-2 py-1'>
					<ResetLeftFill fill='#364153' />
				</button>
			)}
		</div>
	)
}
