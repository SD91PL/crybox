type ULProps = {
	children: React.ReactNode
}

export default function UL({ children }: ULProps) {
	return (
		<ul className={`list-disc pl-6`}>{children}</ul>
	)
}
