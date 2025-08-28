type ColumnsProps = {
	children: React.ReactNode
	className?: string
}

export default function Columns({ children, className }: ColumnsProps) {
	return (
		<div className={`flex flex-col xl:flex-row gap-2 px-2 ${className ?? ''}`}>
			{children}
		</div>
	)
}
