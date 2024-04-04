import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  baseline: {
    address: '',
    floor: '1',
    elevator: false,
    truckAccess: 'easy'
  },
  destination: {
    address: '',
    floor: '1',
    elevator: false,
    truckAccess: 'easy'
  },
  boxes: 0,
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
    },

    addDestination: (state, action) => {
      const { address, floor, elevator, truckAccess } = action.payload;
      state.destination = { address, floor, elevator, truckAccess };
    },

    addBoxes: (state, action) => {
      state.boxes = action.payload;
    }
  },
});

export const { addItems, addBaseline, addDestination, addBoxes } = mainSlice.actions;

export default mainSlice.reducer;
