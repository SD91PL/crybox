'use client'

import { useDispatch, useSelector } from 'react-redux'
import { setCloakDrain, resetDiffForm } from '@/store/features/diffFormSlice'
import { generateDiff } from '@/lib/generateDiff'
import type { RootState } from '@/store/store'

export default function DiffForm() {
	const dispatch = useDispatch()
	const cloakDrain = useSelector(
		(state: RootState) => state.diffForm.cloakDrain
	)

	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		dispatch(setCloakDrain(parseFloat(e.target.value)))
	}

	const handleDownload = () => {
		const content = generateDiff(cloakDrain)
		const blob = new Blob([content], { type: 'text/plain' })
		const url = URL.createObjectURL(blob)
		const a = document.createElement('a')
		a.href = url
		a.download = 'diff_easy.cfg'
		a.click()
		URL.revokeObjectURL(url)
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		handleDownload()
	}

	return (
		<form
			onSubmit={handleSubmit}
			className='flex flex-col gap-2 w-[22.5rem]'>
			<div className='flex justify-between'>
				<p>Cloak Drain Adjuster - Easy Level</p>
				<button
					type='button'
					aria-label='Reset'
					title='Reset settings'
					onClick={() => {
						dispatch(resetDiffForm())
					}}
					className='block grayscale'>
					🔃
				</button>
			</div>

			<div className='flex flex-row justify-between items-center px-2.5 py-2 bg-[#F5F5F5] border border-[#5D5D5D] rounded-lg text-black'>
				<label
					htmlFor='cloakDrain'
					className='block flex-1'>
					Cloak Mode Draining
				</label>
				<select
					id='cloakDrain'
					className='block flex-1 px-1.25 py-1 bg-white border border-black rounded-sm'
					value={cloakDrain.toFixed(1)}
					onChange={handleChange}>
					{Array.from({ length: 11 }, (_, i) => (i * 0.1).toFixed(1)).map(
						val => (
							<option
								key={val}
								value={val}>
								{val}
							</option>
						)
					)}
				</select>
			</div>

			<button
				type='submit'
				className='mt-6 flex justify-center items-center px-6 py-4 w-full bg-[#F5F5F5] border border-[#5D5D5D] text-black text-3xl rounded-lg'>
				Generate diff_easy.cfg
			</button>
		</form>
	)
}
