'use client'

import { useDispatch, useSelector } from 'react-redux'
import {
	setVersion,
	resetControlsForm,
} from '@/store/features/controlsFormSlice'
import { generateControls } from '@/lib/generateControls'
import type { RootState } from '@/store/store'
import { useState, useEffect } from 'react'

export default function ControlsForm() {
	const dispatch = useDispatch()
	const { version } = useSelector((state: RootState) => state.controlsForm)

	const [customVersion, setCustomVersion] = useState(false)
	const [versionInput, setVersionInput] = useState(version.toString())

	// synchronizing input with redux (e.g., after reset)
	useEffect(() => {
		setVersionInput(version.toString())
	}, [version])

	const handleDownload = () => {
		const content = generateControls(version)
		const blob = new Blob([content], { type: 'text/xml' })
		const url = URL.createObjectURL(blob)
		const a = document.createElement('a')
		a.href = url
		a.download = 'actionmaps.xml'
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
			className='flex flex-col gap-2'>
			<div className='flex flex-col gap-4 w-[22.5rem]'>
				<div className='flex justify-between'>
					<p>Crysis or Crysis Warhead</p>
					<button
						type='button'
						aria-label='Reset'
						onClick={() => {
							dispatch(resetControlsForm())
							setCustomVersion(false)
							setVersionInput('20') // initialState = 20
						}}
						className='block grayscale'>
						🔃
					</button>
				</div>

				<div className='flex flex-row justify-between items-center px-2.5 py-2 bg-[#F5F5F5] border border-[#5D5D5D] rounded-lg text-black'>
					<label className='block flex-1'>Version</label>
					{!customVersion ? (
						<select
							value={version}
							onChange={e => {
								if (e.target.value === 'other') {
									setCustomVersion(true)
									setVersionInput('') // empty input
								} else {
									const val = parseInt(e.target.value)
									dispatch(setVersion(val))
								}
							}}
							className='block flex-1 px-1.25 py-1 bg-white border border-black rounded-sm max-w-[10.9375rem]'>
							<option value={20}>20 - Crysis</option>
							<option value={19}>19 - Crysis Warhead</option>
							<option value='other'>Other...</option>
						</select>
					) : (
						<input
							type='number'
							min={0}
							max={99}
							value={versionInput}
							onChange={e => {
								const val = e.target.value
								setVersionInput(val) // always update the text

								const num = parseInt(val)

								if (!isNaN(num) && num >= 0 && num <= 99) {
									dispatch(setVersion(num)) // only valid values for Redux
								} else {
									dispatch(setVersion(0))
								}
							}}
							className='block flex-1 px-1.25 py-1 bg-white border border-black rounded-sm max-w-[10.9375rem] max-h-7'
							placeholder='0-99'
						/>
					)}
				</div>
			</div>

			<button
				type='submit'
				className='mt-6 flex justify-center items-center px-6 py-4 w-full bg-[#F5F5F5] border border-[#5D5D5D] text-black text-3xl rounded-lg'>
				Generate actionmaps.xml
			</button>
		</form>
	)
}
