import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SystemFormState {
	xinput: number
	vibration: number
	crouchToggle: number
	aimZoomMode: number
	aimAssist: number
	cutsceneBars: number
	profile: string
}

const initialState: SystemFormState = {
	xinput: 1,
	vibration: 1,
	crouchToggle: 1,
	aimZoomMode: 1,
	aimAssist: 1,
	cutsceneBars: 0,
	profile: 'default',
}

export const systemFormSlice = createSlice({
	name: 'systemForm',
	initialState,
	reducers: {
		setXinput: (state, action: PayloadAction<number>) => {
			state.xinput = action.payload
		},
		setVibration: (state, action: PayloadAction<number>) => {
			state.vibration = action.payload
		},
		setCrouchToggle: (state, action: PayloadAction<number>) => {
			state.crouchToggle = action.payload
		},
		setAimZoomMode: (state, action: PayloadAction<number>) => {
			state.aimZoomMode = action.payload
		},
		setAimAssist: (state, action: PayloadAction<number>) => {
			state.aimAssist = action.payload
		},
		setCutsceneBars: (state, action: PayloadAction<number>) => {
			state.cutsceneBars = action.payload
		},
		setProfile: (state, action: PayloadAction<string>) => {
			state.profile = action.payload
		},
		resetSystemForm: () => initialState,
	},
})

export const {
	setXinput,
	setVibration,
	setCrouchToggle,
	setAimZoomMode,
	setAimAssist,
	setCutsceneBars,
	setProfile,
	resetSystemForm,
} = systemFormSlice.actions

export default systemFormSlice.reducer
