import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    name: ''
}

const animalSlice = createSlice({
  name: 'animal',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
})

export const { setName } = animalSlice.actions
export default animalSlice.reducer