import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ControlsFormState {
	version: number
	mappings: Record<string, string> // e.g. 'player.jump': 'xi_a'
}

const initialState: ControlsFormState = {
	version: 20,
	mappings: {}, // empty - we will use default values from the component
}

export const controlsFormSlice = createSlice({
	name: 'controlsForm',
	initialState,
	reducers: {
		setVersion: (state, action: PayloadAction<number>) => {
			state.version = action.payload
		},
		setControlMapping: (
			state,
			action: PayloadAction<{ key: string; value: string }>
		) => {
			state.mappings[action.payload.key] = action.payload.value
		},
		resetControlsForm: () => initialState,
	},
})

export const { setVersion, setControlMapping, resetControlsForm } =
	controlsFormSlice.actions
export default controlsFormSlice.reducer
