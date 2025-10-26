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
import { FormContainer } from '@/UI/customize/FormContainer'
import { FormHeader } from '@/UI/customize/FormHeader'
import { SelectRow } from '@/UI/customize/SelectRow'
import { InputRow } from '@/UI/customize/InputRow'
import { SubmitButton } from '@/UI/customize/SubmitButton'

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

	// Reset profile to default when custom profile mode is disabled
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
		<FormContainer onSubmit={handleSubmit}>
			<FormHeader
				title='System Settings'
				onReset={() => {
					dispatch(resetSystemForm())
					setCustomProfile(false)
				}}
				className='mb-1'
			/>

			<SelectRow
				label='Xbox Pad Support'
				value={xinput}
				onChange={val => dispatch(setXinput(parseInt(val)))}
				options={{ Enable: 1, Disable: 0 }}
			/>

			<SelectRow
				label='Controller Vibration'
				value={vibration}
				onChange={val => dispatch(setVibration(parseInt(val)))}
				options={{ Enable: 1, Disable: 0 }}
			/>

			<SelectRow
				label='Crouch'
				value={crouchToggle}
				onChange={val => dispatch(setCrouchToggle(parseInt(val)))}
				options={{ Toggle: 1, Hold: 0 }}
			/>

			<SelectRow
				label='Aim'
				value={aimZoomMode}
				onChange={val => dispatch(setAimZoomMode(parseInt(val)))}
				options={{ Hold: 1, Toggle: 0 }}
			/>

			<SelectRow
				label='Aim Assist'
				value={aimAssist}
				onChange={val => dispatch(setAimAssist(parseInt(val)))}
				options={{ Enable: 1, Disable: 0 }}
			/>

			<SelectRow
				label='Cutscenes Bars'
				value={cutsceneBars}
				onChange={val => dispatch(setCutsceneBars(parseInt(val)))}
				options={{ Disable: 0, Enable: 1 }}
			/>

			<InputRow label='Profile Name'>
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
			</InputRow>

			<SubmitButton className='mt-4'>Generate system.cfg</SubmitButton>
		</FormContainer>
	)
}
