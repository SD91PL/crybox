interface FormContainerProps {
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
	children: React.ReactNode
	className?: string
}

export function FormContainer({
	onSubmit,
	children,
	className = '',
}: FormContainerProps) {
	return (
		<form
			onSubmit={onSubmit}
			className={`flex flex-col gap-2 w-[22.5rem] ${className}`}>
			{children}
		</form>
	)
}
