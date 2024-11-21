// src/redux/features/filter/filterSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define the Enum for Filter States


// Initial state set to 'all'
const initialState: string = "all"

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    // Set the filter to the provided value from the action payload
    setFilter: (state, action: PayloadAction<string>) => {
      return action.payload
    },
  },
})

export const { setFilter } = filterSlice.actions

export default filterSlice.reducer
