type H2Props = {
	children: React.ReactNode
	center?: boolean
}

export default function H2({ children, center }: H2Props) {
	return (
		<h2 className={`mt-5 font-bold text-2xl ${center ? 'text-center' : ''}`}>
			{children}
		</h2>
	)
}
