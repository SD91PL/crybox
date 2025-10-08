import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
	cloakDrain: 0.1,
}

export const diffFormSlice = createSlice({
	name: 'diffForm',
	initialState,
	reducers: {
		setCloakDrain: (state, action: PayloadAction<number>) => {
			state.cloakDrain = action.payload
		},
	},
})

export const { setCloakDrain } = diffFormSlice.actions
export default diffFormSlice.reducer
