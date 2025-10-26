interface SubmitButtonProps {
	children: React.ReactNode
	className?: string
}

export function SubmitButton({ children, className = '' }: SubmitButtonProps) {
	return (
		<button
			type='submit'
			className={`px-6 py-4 w-full bg-gray-600 hover:bg-gray-700 text-white text-xl font-semibold rounded-lg transition-colors shadow-md ${className}`}>
			{children}
		</button>
	)
}
