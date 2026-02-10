import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
	cloakDrain: 0.1,
	speedEnergyConsumption: 110, // nowa wartość
}

export const diffFormSlice = createSlice({
	name: 'diffForm',
	initialState,
	reducers: {
		setCloakDrain: (state, action: PayloadAction<number>) => {
			state.cloakDrain = action.payload
		},
		setSpeedEnergyConsumption: (state, action: PayloadAction<number>) => {
			state.speedEnergyConsumption = action.payload
		},
		resetDiffForm: () => initialState,
	},
})

export const { setCloakDrain, setSpeedEnergyConsumption, resetDiffForm } =
	diffFormSlice.actions
export default diffFormSlice.reducer
