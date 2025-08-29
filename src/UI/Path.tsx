type PathProps = {
	children: React.ReactNode
}

export default function Path({ children }: PathProps) {
	return (
		<p className='px-5 py-2.5 text-white text-sm bg-[#6a6a6a] rounded-xl'><code className={`font-sans font-normal`}>{children}</code></p>
	)
}
