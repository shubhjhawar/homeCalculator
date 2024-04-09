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
  packagedItems: [],
  assembledItems: [],
  disassembledIems: []
};

export const mainSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItems: (state, action) => {
      const newItems = action.payload.filter(newItem => !state.items.some(existingItem => existingItem.name === newItem.name));
      state.items.push(...newItems);
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
    },

    addPackagedItems: (state, action) => {
      const newPackagedItems = action.payload.filter(newItem => !state.packagedItems.some(existingItem => existingItem.name === newItem.name));
      state.packagedItems.push(...newPackagedItems);
    },

    changeItemQuantity: (state, action) => {
      const { name, change } = action.payload;
      const itemIndex = state.items.findIndex(item => item.name === name);
      if (itemIndex !== -1) {
        state.items[itemIndex].quantity += change;
      }
    },

    changePackagedItemQuantity: (state, action) => {
      const { name, change } = action.payload;
      const packagedItemIndex = state.packagedItems.findIndex(item => item.name === name);
      if (packagedItemIndex !== -1) {
        state.packagedItems[packagedItemIndex].quantity += change;
      }
    },
    
    removeItem: (state, action) => {
      const {item} = action.payload;
      state.items = state.items.filter(i => i.name !== item.name);
    },

    removePackagedItem: (state, action) => {
      const {item} = action.payload;
      state.packagedItems = state.packagedItems.filter(i => i.name !== item.name);
    },

    addAssembledItems: (state, action) => {
      const newAssembledItems = action.payload.filter(newItem => !state.assembledItems.some(existingItem => existingItem.name === newItem.name));
      state.assembledItems.push(...newAssembledItems);
    },

    changeAssembledItemQuantity: (state, action) => {
      const { name, change } = action.payload;
      const assembledItemIndex = state.assembledItems.findIndex(item => item.name === name);
      if (assembledItemIndex !== -1) {
        state.assembledItems[assembledItemIndex].quantity += change;
      }
    },

    removeAssembledItem: (state, action) => {
      const {item} = action.payload;
      state.assembledItems = state.assembledItems.filter(i => i.name !== item.name);
    },

    addDisassembledItems: (state, action) => {
      const newDisassembledItems = action.payload.filter(newItem => !state.disassembledIems.some(existingItem => existingItem.name === newItem.name));
      state.disassembledIems.push(...newDisassembledItems);
    },

    changeDisassembledItemQuantity: (state, action) => {
      const { name, change } = action.payload;
      const disassembledItemIndex = state.disassembledItems.findIndex(item => item.name === name);
      if (disassembledItemIndex !== -1) {
        state.disassembledIems[disassembledItemIndex].quantity += change;
      }
    },

    removeDisassembledItem: (state, action) => {
      const {item} = action.payload;
      state.disassembledIems = state.disassembledIems.filter(i => i.name !== item.name);
    },

    
  },
});

export const { 
  addItems, addBaseline, addDestination, addBoxes, addPackagedItems, changeItemQuantity, changePackagedItemQuantity, removeItem, removePackagedItem,
  addAssembledItems,
  changeAssembledItemQuantity,
  removeAssembledItem,
  addDisassembledItems,
  changeDisassembledItemQuantity,
  removeDisassembledItem

} = mainSlice.actions;

export default mainSlice.reducer;
