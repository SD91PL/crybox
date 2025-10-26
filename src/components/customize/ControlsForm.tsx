'use client'

import { useDispatch, useSelector } from 'react-redux'
import {
	setVersion,
	resetControlsForm,
	setControlMapping,
} from '@/store/features/controlsFormSlice'
import { generateControls } from '@/lib/generateControls'
import type { RootState } from '@/store/store'
import { useState, useEffect } from 'react'
import { FormContainer } from '@/UI/customize/FormContainer'
import { FormHeader } from '@/UI/customize/FormHeader'
import { InputRow } from '@/UI/customize/InputRow'
import { TabNavigation } from '@/UI/customize/TabNavigation'
import { SubmitButton } from '@/UI/customize/SubmitButton'

// Available Xbox buttons with descriptions (without analog axes)
const XI_BUTTONS = [
	{ value: 'xi_a', label: 'A' },
	{ value: 'xi_b', label: 'B' },
	{ value: 'xi_x', label: 'X' },
	{ value: 'xi_y', label: 'Y' },
	{ value: 'xi_start', label: 'Start/Menu Button' },
	{ value: 'xi_back', label: 'Back/View Button' },
	{ value: 'xi_dpad_up', label: 'D-pad Up' },
	{ value: 'xi_dpad_down', label: 'D-pad Down' },
	{ value: 'xi_dpad_left', label: 'D-pad Left' },
	{ value: 'xi_dpad_right', label: 'D-pad Right' },
	{ value: 'xi_shoulderl', label: 'LB' },
	{ value: 'xi_shoulderr', label: 'RB' },
	{ value: 'xi_triggerl_btn', label: 'LT' },
	{ value: 'xi_triggerr_btn', label: 'RT' },
	{ value: 'xi_thumbl', label: 'L3' },
	{ value: 'xi_thumbr', label: 'R3' },
]

// Type for a single action
type ActionMapping = {
	key: string
	label: string
	actionmaps: string[]
}

// Default button mappings for each action
const DEFAULT_MAPPINGS: Record<string, string> = {
	'default.attack1': 'xi_triggerr_btn',
	'default.xi_attack1': 'xi_triggerr_btn',
	'default.xi_use': 'xi_x',
	'default.xi_zoom': 'xi_triggerl_btn',
	'default.hud_suit_mod': 'xi_shoulderr',
	'default.hud_select1': 'xi_dpad_up',
	'default.hud_select2': 'xi_dpad_left',
	'default.hud_select3': 'xi_dpad_right',
	'default.hud_select4': 'xi_thumbl',
	'default.hud_select5': 'xi_thumbr',
	'default.xi_attack2': 'xi_triggerl_btn',
	'default.xi_hud_back': 'xi_start',
	'default.hud_night_vision': 'xi_back',
	'default.firemode': 'xi_dpad_up',
	'helicopter.v_moveup': 'xi_a',
	'helicopter.v_movedown': 'xi_b',
	'helicopter.v_boost': 'xi_shoulderl',
	'landvehicle.v_brake': 'xi_a',
	'landvehicle.v_boost': 'xi_shoulderl',
	'player.jump': 'xi_a',
	'player.crouch': 'xi_b',
	'player.prone': 'xi_dpad_down',
	'player.sprint': 'xi_thumbl',
	'player.special': 'xi_thumbr',
	'player.reload': 'xi_x',
	'player.nextitem': 'xi_dpad_left',
	'player.handgrenade': 'xi_dpad_right',
	'player.xi_handgrenade': 'xi_y',
	'player.xi_grenade': 'xi_y',
	'player.binoculars': 'xi_shoulderl',
	'player.zoom_in': 'xi_dpad_right',
	'player.zoom_out': 'xi_dpad_left',
	'seavehicle.v_brake': 'xi_a',
	'seavehicle.v_boost': 'xi_shoulderl',
	'vehicle.use': 'xi_x',
	'vehicle.v_changeview': 'xi_thumbr',
	'vehicle.v_lights': 'xi_thumbl',
	'vehicle.v_horn': 'xi_b',
	'vehicle.v_changeseat': 'xi_y',
	'vtol.v_moveup': 'xi_a',
	'vtol.v_movedown': 'xi_b',
	'vtol.v_boost': 'xi_shoulderl',
}

// Grouped action mappings
const ACTIONMAPS = {
	singleplayer: [
		{ key: 'xi_hud_back', label: 'Pause Menu', actionmaps: ['default'] },
		{ key: 'hud_night_vision', label: 'Night Vision', actionmaps: ['default'] },
		{
			key: 'xi_handgrenade',
			label: 'Grenade',
			actionmaps: ['player', 'player.xi_grenade'],
		},
		{ key: 'xi_use', label: 'Use', actionmaps: ['default'] },
		{ key: 'reload', label: 'Reload', actionmaps: ['player'] },
		{ key: 'crouch', label: 'Crouch', actionmaps: ['player'] },
		{ key: 'jump', label: 'Jump / Stand', actionmaps: ['player'] },
		{ key: 'binoculars', label: 'Binoculars', actionmaps: ['player'] },
		{ key: 'hud_suit_mod', label: 'Suit Menu', actionmaps: ['default'] },
		{ key: 'xi_zoom', label: 'Aim Weapon', actionmaps: ['default'] },
		{
			key: 'attack1',
			label: 'Fire 1',
			actionmaps: ['default', 'default.xi_attack1'],
		},
		{ key: 'xi_attack2', label: 'Aim / Fire 2', actionmaps: ['default'] },
		{ key: 'sprint', label: 'Sprint', actionmaps: ['player'] },
		{ key: 'special', label: 'Melee', actionmaps: ['player'] },
		{ key: 'firemode', label: 'Fire Mode', actionmaps: ['default'] },
		{ key: 'handgrenade', label: 'Grenade Type', actionmaps: ['player'] },
		{ key: 'nextitem', label: 'Weapon Selection', actionmaps: ['player'] },
		{ key: 'prone', label: 'Prone', actionmaps: ['player'] },
		{ key: 'hud_select1', label: 'HUD Select 1', actionmaps: ['default'] },
		{ key: 'hud_select2', label: 'HUD Select 2', actionmaps: ['default'] },
		{ key: 'hud_select3', label: 'HUD Select 3', actionmaps: ['default'] },
		{ key: 'hud_select4', label: 'HUD Select 4', actionmaps: ['default'] },
		{ key: 'hud_select5', label: 'HUD Select 5', actionmaps: ['default'] },
		{ key: 'zoom_in', label: 'Zoom In', actionmaps: ['player'] },
		{ key: 'zoom_out', label: 'Zoom Out', actionmaps: ['player'] },
	],
	vehicles: [
		{ key: 'use', label: 'Use / Exit', actionmaps: ['vehicle'] },
		{ key: 'v_changeseat', label: 'Change Seat', actionmaps: ['vehicle'] },
		{ key: 'v_changeview', label: 'Change View', actionmaps: ['vehicle'] },
		{ key: 'v_lights', label: 'Lights', actionmaps: ['vehicle'] },
		{ key: 'v_horn', label: 'Horn', actionmaps: ['vehicle'] },
		{
			key: 'v_brake',
			label: 'Brake',
			actionmaps: ['landvehicle', 'seavehicle'],
		},
		{
			key: 'v_boost',
			label: 'Boost',
			actionmaps: ['landvehicle', 'seavehicle'],
		},
	],
	aircraft: [
		{ key: 'v_moveup', label: 'Move Up', actionmaps: ['helicopter', 'vtol'] },
		{
			key: 'v_movedown',
			label: 'Move Down',
			actionmaps: ['helicopter', 'vtol'],
		},
		{ key: 'v_boost', label: 'Boost', actionmaps: ['helicopter', 'vtol'] },
	],
}

export default function ControlsForm() {
	const dispatch = useDispatch()
	const { version, mappings } = useSelector(
		(state: RootState) => state.controlsForm
	)

	const [customVersion, setCustomVersion] = useState(false)
	const [versionInput, setVersionInput] = useState(version.toString())
	const [activeTab, setActiveTab] =
		useState<keyof typeof ACTIONMAPS>('singleplayer')

	// Synchronize input with redux (e.g., after reset)
	useEffect(() => {
		setVersionInput(version.toString())
	}, [version])

	const handleDownload = () => {
		const content = generateControls(version, mappings)
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

	const handleMappingChange = (action: ActionMapping, button: string) => {
		// Update all actionmaps associated with the specified action
		action.actionmaps.forEach((mapping: string) => {
			// Check if the mapping contains a dot (full key like 'default.xi_attack1')
			if (mapping.includes('.')) {
				// This is the full key - use it directly
				dispatch(setControlMapping({ key: mapping, value: button }))
			} else {
				// This is the name of the actionmap - create a full key
				const fullKey = `${mapping}.${action.key}`
				dispatch(setControlMapping({ key: fullKey, value: button }))
			}
		})
	}

	// Prepare tabs for navigation
	const tabs = [
		{ key: 'singleplayer', label: 'Single Player' },
		{ key: 'vehicles', label: 'Vehicles' },
		{ key: 'aircraft', label: 'Heli / VTOL' },
	]

	return (
		<FormContainer
			onSubmit={handleSubmit}
			className='max-w-[22.5rem]'>
			<div className='flex flex-col gap-4 w-full'>
				<FormHeader
					title='Xbox Controller Mapping'
					resetLabel='Reset All'
					onReset={() => {
						dispatch(resetControlsForm())
						setCustomVersion(false)
						setVersionInput('20')
					}}
				/>

				<InputRow
					label='Version'
					onReset={
						customVersion
							? () => {
									dispatch(resetControlsForm())
									setCustomVersion(false)
									setVersionInput('20')
							  }
							: undefined
					}>
					{!customVersion ? (
						<select
							value={version}
							onChange={e => {
								if (e.target.value === 'other') {
									setCustomVersion(true)
									setVersionInput('')
								} else {
									const val = parseInt(e.target.value)
									dispatch(setVersion(val))
								}
							}}
							className='block flex-1 px-1.25 py-1 bg-white border border-gray-400 rounded-sm max-h-7'>
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
								setVersionInput(val)
								const num = parseInt(val)
								if (!isNaN(num) && num >= 0 && num <= 99) {
									dispatch(setVersion(num))
								} else {
									dispatch(setVersion(0))
								}
							}}
							className='block flex-1 px-1.25 py-1 bg-white border border-gray-400 rounded-sm max-h-7'
							placeholder='0-99'
						/>
					)}
				</InputRow>

				<TabNavigation
					tabs={tabs}
					activeTab={activeTab}
					onTabChange={tab => setActiveTab(tab as keyof typeof ACTIONMAPS)}
				/>

				{/* Action mappings */}
				<div className='flex flex-col gap-3 h-96 overflow-y-auto p-2 bg-gray-50 rounded-lg border border-gray-200'>
					{ACTIONMAPS[activeTab].map(action => {
						// Get value - check if the first mapping is a full key or an actionmap name
						const firstMapping = action.actionmaps[0]
						const fullKey = firstMapping.includes('.')
							? firstMapping
							: `${firstMapping}.${action.key}`
						const currentValue =
							mappings[fullKey] ||
							DEFAULT_MAPPINGS[fullKey] ||
							XI_BUTTONS[0].value

						return (
							<div
								key={`${activeTab}-${action.key}`}
								className='flex items-center justify-between px-3 py-2 bg-white border border-gray-300 rounded shadow-sm'>
								<label className='text-sm font-medium flex-1'>
									{action.label}
								</label>
								<select
									value={currentValue}
									onChange={e => handleMappingChange(action, e.target.value)}
									className='px-2 py-1 bg-white border border-gray-400 rounded text-sm ml-2 min-w-[160px]'>
									{XI_BUTTONS.map(btn => (
										<option
											key={btn.value}
											value={btn.value}>
											{btn.label}
										</option>
									))}
								</select>
							</div>
						)
					})}
				</div>
			</div>

			<SubmitButton className='mt-4'>Generate actionmaps.xml</SubmitButton>
		</FormContainer>
	)
}
