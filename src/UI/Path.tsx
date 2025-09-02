import PathBtn from './PathBtn'

type PathProps = {
	children: string
}

export default function Path({ children }: PathProps) {
	const formatTextWithBreaks = (text: string) =>
		text
			.split('\\')
			.flatMap((part, index, arr) =>
				index < arr.length - 1 ? [part, '\\', <wbr key={index} />] : [part]
			)

	return (
		<div className='inline-flex items-center justify-between pl-5 pr-3 py-2.5 bg-[#6a6a6a] rounded-xl break-words'>
			<code className='font-sans font-normal text-white text-sm'>
				{formatTextWithBreaks(children)}
			</code>
			<PathBtn textToCopy={children} />
		</div>
	)
}
