'use client'

import { useDispatch, useSelector } from 'react-redux'
import {
	setXinput,
	setVibration,
	setCrouchToggle,
	setAimZoomMode,
	setAimAssist,
	setCutsceneBars,
	setProfile,
	resetSystemForm,
} from '@/store/features/systemFormSlice'
import { generateSystem } from '@/lib/generateSystem'
import type { RootState } from '@/store/store'
import { useState, useEffect } from 'react'
import { ResetLeftFill } from '@/UI/customize/ResetBtn'

export default function SystemForm() {
	const dispatch = useDispatch()
	const {
		xinput,
		vibration,
		crouchToggle,
		aimZoomMode,
		aimAssist,
		cutsceneBars,
		profile,
	} = useSelector((state: RootState) => state.systemForm)

	const [customProfile, setCustomProfile] = useState(false)

	useEffect(() => {
		if (!customProfile && profile !== 'default') {
			dispatch(setProfile('default'))
		}
	}, [customProfile, profile, dispatch])

	const handleDownload = () => {
		const content = generateSystem({
			xinput,
			vibration,
			crouchToggle,
			aimZoomMode,
			aimAssist,
			cutsceneBars,
			profile,
		})
		const blob = new Blob([content], { type: 'text/plain' })
		const url = URL.createObjectURL(blob)
		const a = document.createElement('a')
		a.href = url
		a.download = 'system.cfg'
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
			<div className='flex justify-between items-center mb-1'>
				<p className='text-lg font-semibold'>System Settings</p>
				<button
					type='button'
					aria-label='Reset'
					title='Reset Settings'
					onClick={() => {
						dispatch(resetSystemForm())
						setCustomProfile(false)
					}}
					className='group block p-1 bg-gray-200 hover:bg-gray-300 rounded transition-colors'>
					<ResetLeftFill fill='#364153' />
				</button>
			</div>

			<SelectRow
				label='Xbox Pad Support'
				value={xinput}
				onChange={val => dispatch(setXinput(val))}
				options={{ Enable: 1, Disable: 0 }}
			/>
			<SelectRow
				label='Controller Vibration'
				value={vibration}
				onChange={val => dispatch(setVibration(val))}
				options={{ Enable: 1, Disable: 0 }}
			/>
			<SelectRow
				label='Crouch'
				value={crouchToggle}
				onChange={val => dispatch(setCrouchToggle(val))}
				options={{ Toggle: 1, Hold: 0 }}
			/>
			<SelectRow
				label='Aim'
				value={aimZoomMode}
				onChange={val => dispatch(setAimZoomMode(val))}
				options={{ Hold: 1, Toggle: 0 }}
			/>
			<SelectRow
				label='Aim Assist'
				value={aimAssist}
				onChange={val => dispatch(setAimAssist(val))}
				options={{ Enable: 1, Disable: 0 }}
			/>
			<SelectRow
				label='Cutscenes Bars'
				value={cutsceneBars}
				onChange={val => dispatch(setCutsceneBars(val))}
				options={{ Disable: 0, Enable: 1 }}
			/>

			<div className='flex flex-row justify-between items-center px-2.5 py-2 bg-[#F5F5F5]  border border-gray-300 rounded shadow-sm text-black'>
				<label className='block flex-1'>Profile Name</label>
				{!customProfile ? (
					<select
						value={profile}
						onChange={e => {
							if (e.target.value === 'other') {
								setCustomProfile(true)
							} else {
								dispatch(setProfile(e.target.value))
							}
						}}
						className='block flex-1 px-1.25 py-1 bg-white border border-gray-400 rounded-sm max-w-[10.9375rem]'>
						<option value='default'>Default</option>
						<option value='other'>Other...</option>
					</select>
				) : (
					<input
						type='text'
						value={profile}
						onChange={e => dispatch(setProfile(e.target.value))}
						className='block flex-1 px-1.25 py-1 bg-white border border-gray-400 rounded-sm max-w-[10.9375rem] max-h-7'
					/>
				)}
			</div>

			<button
				type='submit'
				className='mt-4 px-6 py-4 w-full bg-gray-600 hover:bg-gray-700 text-white text-xl font-semibold rounded-lg transition-colors shadow-md'>
				Generate system.cfg
			</button>
		</form>
	)
}

function SelectRow({
	label,
	value,
	onChange,
	options,
}: {
	label: string
	value: number
	onChange: (val: number) => void
	options: Record<string, number>
}) {
	return (
		<div className='flex flex-row justify-between items-center px-2.5 py-2 bg-[#F5F5F5]  border border-gray-300 rounded shadow-sm text-black'>
			<label className='block flex-1'>{label}</label>
			<select
				value={value}
				onChange={e => onChange(parseInt(e.target.value))}
				className='block flex-1 px-1.25 py-1 bg-white border border-gray-400 rounded-sm'>
				{Object.entries(options).map(([label, val]) => (
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
