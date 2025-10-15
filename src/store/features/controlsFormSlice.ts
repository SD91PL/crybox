import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ControlsFormState {
  version: number
}

const initialState: ControlsFormState = {
  version: 20, // default Crysis
}

export const controlsFormSlice = createSlice({
  name: 'controlsForm',
  initialState,
  reducers: {
    setVersion: (state, action: PayloadAction<number>) => {
      state.version = action.payload
    },
    resetControlsForm: () => initialState,
  },
})

export const { setVersion, resetControlsForm } = controlsFormSlice.actions
export default controlsFormSlice.reducer
