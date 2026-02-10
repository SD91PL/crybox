'use client'

import { useDispatch, useSelector } from 'react-redux'
import {
	setCloakDrain,
	setSpeedEnergyConsumption,
	resetDiffForm,
} from '@/store/features/diffFormSlice'
import { generateDiff } from '@/lib/generateDiff'
import type { RootState } from '@/store/store'
import { FormContainer } from '@/UI/customize/FormContainer'
import { FormHeader } from '@/UI/customize/FormHeader'
import { SelectRow } from '@/UI/customize/SelectRow'
import { SubmitButton } from '@/UI/customize/SubmitButton'

export default function DiffForm() {
	const dispatch = useDispatch()
	const cloakDrain = useSelector(
		(state: RootState) => state.diffForm.cloakDrain,
	)
	const speedEnergyConsumption = useSelector(
		(state: RootState) => state.diffForm.speedEnergyConsumption,
	)

	const handleCloakDrainChange = (val: string) => {
		dispatch(setCloakDrain(parseFloat(val)))
	}

	const handleSpeedEnergyChange = (val: string) => {
		dispatch(setSpeedEnergyConsumption(parseInt(val)))
	}

	const handleDownload = () => {
		const content = generateDiff(cloakDrain, speedEnergyConsumption)
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

	// Generate options array for cloak drain values (0.0 to 1.0)
	const cloakDrainOptions = Array.from({ length: 11 }, (_, i) => {
		const val = (i * 0.1).toFixed(1)
		return { label: val, value: val }
	})

	// Options for speed energy consumption (11, 33, 55, 110)
	const speedEnergyOptions = [
		{ label: 'Very Low', value: '11' },
		{ label: 'Low', value: '33' },
		{ label: 'Medium', value: '55' },
		{ label: 'High (Default)', value: '110' },
	]

	return (
		<FormContainer onSubmit={handleSubmit}>
			<FormHeader
				title='Easy Level Settings'
				onReset={() => dispatch(resetDiffForm())}
				className='mb-1'
			/>

			<SelectRow
				id='cloakDrain'
				label='Cloak Mode Draining'
				value={cloakDrain.toFixed(1)}
				onChange={handleCloakDrainChange}
				options={cloakDrainOptions}
			/>

			{/* Helper text for cloak drain values */}
			<div className='flex justify-between mt-1.5 px-2'>
				<p className='text-sm text-gray-500'>0 - Never Ending</p>
				<p className='text-sm text-gray-500'>0.1 - Crybox</p>
				<p className='text-sm text-gray-500'>1 - Crysis Default</p>
			</div>

			<SelectRow
				id='speedEnergyConsumption'
				label='Speed Mode Energy Consumption'
				value={speedEnergyConsumption.toString()}
				onChange={handleSpeedEnergyChange}
				options={speedEnergyOptions}
			/>

			{/* Helper text for speed mode energy consumption */}
			<div className='flex justify-between mt-1.5 px-2'>
				<p className='text-sm text-gray-500'>
					High (Default) value is still in the original Crybox files
				</p>
			</div>

			<SubmitButton className='mt-2'>Generate diff_easy.cfg</SubmitButton>
		</FormContainer>
	)
}
