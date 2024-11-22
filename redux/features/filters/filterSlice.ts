import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Initial state for the filter, set to 'all' by default
const initialState: string = "all";

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    // Set the filter to the provided value from the action payload
    setFilters: (state, action: PayloadAction<string>) => {
      return action.payload;
    },
  },
});

export const { setFilters } = filterSlice.actions;

export default filterSlice.reducer;
