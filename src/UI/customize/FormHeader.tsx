import { ResetLeftFill } from '@/UI/customize/ResetBtn'

interface FormHeaderProps {
	title: string
	onReset: () => void
	resetLabel?: string
	className?: string
}

export function FormHeader({
	title,
	onReset,
	resetLabel = 'Reset Settings',
	className = '',
}: FormHeaderProps) {
	return (
		<div className={`flex justify-between items-center ${className}`}>
			<p className='text-lg font-semibold'>{title}</p>
			<button
				type='button'
				aria-label='Reset'
				title={resetLabel}
				onClick={onReset}
				className='group block p-1 bg-gray-200 hover:bg-gray-300 rounded transition-colors'>
				<ResetLeftFill fill='#364153' />
			</button>
		</div>
	)
}
