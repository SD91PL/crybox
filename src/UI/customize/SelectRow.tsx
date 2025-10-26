interface SelectRowProps<T extends string | number = string | number> {
	label: string
	value: T
	onChange: (val: string) => void
	options: Record<string, T> | Array<{ label: string; value: T }>
	id?: string
	className?: string
}

export function SelectRow<T extends string | number = string | number>({
	label,
	value,
	onChange,
	options,
	id,
	className = '',
}: SelectRowProps<T>) {
	// Convert options to array format if it's an object
	const optionsArray = Array.isArray(options)
		? options
		: Object.entries(options).map(([label, val]) => ({
				label,
				value: val as T,
		  }))

	return (
		<div
			className={`flex flex-row justify-between items-center px-2.5 py-2 bg-[#F5F5F5] border border-gray-300 rounded shadow-sm text-black ${className}`}>
			<label
				htmlFor={id}
				className='block flex-1'>
				{label}
			</label>
			<select
				id={id}
				value={value}
				onChange={e => onChange(e.target.value)}
				className='block flex-1 px-1.25 py-1 bg-white border border-gray-400 rounded-sm max-w-[10.9375rem]'>
				{optionsArray.map(({ label, value: val }) => (
					<option
						key={val}
						value={val}>
						{label}
					</option>
				))}
			</select>
		</div>
	)
}
