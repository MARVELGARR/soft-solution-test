import type { RootState } from '@/redux/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


// Define a type for the slice state
interface FilterState {
  filterValue: string | null;  // A filter state would be a string 
}

// Define the initial state using that type
const initialState: FilterState = {
  filterValue:"All Category",  // Initially, no filter is applied
};

export const filterSlice = createSlice({
  name: 'filter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Action to apply a filter by setting the filter value
    setFilter: (state, action: PayloadAction<string | null>) => {
      state.filterValue = action.payload; // Set the filter to the value in the payload 
    },
    // Action to clear the filter
    clearFilter: (state) => {
      state.filterValue = null;  // Reset the filter value to null
    },
  },
});

export const { setFilter, clearFilter } = filterSlice.actions;

// Selector to get the current filter value from the state
export const selectFilter = (state: RootState) => state.filter.filterValue;

export default filterSlice.reducer;
