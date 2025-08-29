type SectionProps = {
	children: React.ReactNode
}

export default function Section({ children }: SectionProps) {
	return (
		<section className={`flex flex-col gap-5`}>{children}</section>
	)
}
