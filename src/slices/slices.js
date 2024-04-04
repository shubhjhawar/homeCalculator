import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  baseline: {
    address: '',
    floor: '',
    elevator: '',
    truckAccess: ''
  },
  destination: {
    address: '',
    floor: '',
    elevator: false,
    truckAccess: 'easy'
  }
};

export const mainSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItems: (state, action) => {
      state.items.push(...action.payload);
    },

    addBaseline: (state, action) => {
      const { address, floor, elevator, truckAccess } = action.payload;
      state.baseline = { address, floor, elevator, truckAccess };
    }
  },
});

export const { addItems, addBaseline } = mainSlice.actions;

export default mainSlice.reducer;
