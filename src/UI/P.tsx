type PProps = {
	children: React.ReactNode
	center?: boolean
}

export default function P({ children, center }: PProps) {
	return (
		<p className={`text-base ${center ? 'text-center' : ''}`}>{children}</p>
	)
}
