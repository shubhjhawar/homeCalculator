import { createSlice } from '@reduxjs/toolkit';
import { getDistance } from '../utils';

const initialState = {
  items: [],
  baseline: {
    address: '956 Richmond St, London, ON N6A 3J5, Canada',
    floor: '1',
    elevator: false,
    truckAccess: 'easy'
  },
  destination: {
    address: '534 Blackwater Pl, London, ON N5X 4J4, Canada',
    floor: '1',
    elevator: false,
    truckAccess: 'easy'
  },
  boxes: 0,
  packagedItems: [],
  assembledItems: [],
  disassembledItems: [],
  storageItems: [],
  storagePeriod: {
    startDay: '',
    endDay: '',
  },
  craneItems: [],
  totalPrice: 0,
  servicesPrice: 0,
  distancePrice: 0,
  boxesPrice: 0,
  itemsPrice:0
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
      const newDisassembledItems = action.payload.filter(newItem => !state.disassembledItems.some(existingItem => existingItem.name === newItem.name));
      state.disassembledItems.push(...newDisassembledItems);
    },

    changeDisassembledItemQuantity: (state, action) => {
      const { name, change } = action.payload;
      const disassembledItemIndex = state.disassembledItems.findIndex(item => item.name === name);
      if (disassembledItemIndex !== -1) {
        state.disassembledItems[disassembledItemIndex].quantity += change;
      }
    },

    removeDisassembledItem: (state, action) => {
      const {item} = action.payload;
      state.disassembledItems = state.disassembledItems.filter(i => i.name !== item.name);
    },

    addCraneItems: (state, action) => {
      const newCraneItems = action.payload.filter(newItem => !state.craneItems.some(existingItem => existingItem.name === newItem.name));
      state.craneItems.push(...newCraneItems);
    },

    changeCraneItemQuantity: (state, action) => {
      const { name, change } = action.payload;
      const craneItemIndex = state.craneItems.findIndex(item => item.name === name);
      if (craneItemIndex !== -1) {
        state.craneItems[craneItemIndex].quantity += change;
      }
    },

    removeCraneItem: (state, action) => {
      const {item} = action.payload;
      state.craneItems = state.craneItems.filter(i => i.name !== item.name);
    },

    addStorageItems: (state, action) => {
      const newStorageItems = action.payload.filter(newItem => !state.storageItems.some(existingItem => existingItem.name === newItem.name));
      state.storageItems.push(...newStorageItems);
    },

    changeStorageItemQuantity: (state, action) => {
      const { name, change } = action.payload;
      const storageItemIndex = state.storageItems.findIndex(item => item.name === name);
      if (storageItemIndex !== -1) {
        state.storageItems[storageItemIndex].quantity += change;
      }
    },

    removeStorageItem: (state, action) => {
      const {item} = action.payload;
      state.storageItems = state.storageItems.filter(i => i.name !== item.name);
    },

    setStorageStartDay: (state, action) => {
      state.storagePeriod.startDay = action.payload;
    },

    setStorageEndDay: (state, action) => {
      state.storagePeriod.endDay = action.payload;
    },
    
    calculate: (state, action) => {
      const { baseline, destination, boxes, packagedItems, assembledItems, disassembledItems, storageItems, craneItems } = action.payload;
    
      // Calculate total price for all items
      let totalPrice = 0;
      let servicesPrice = 0;
      let distancePrice = 0;
      let boxesPrice = 0;
      let itemsPrice = 0;


      getDistance()
    
      // Calculate total price for items
      if (state.items) {
        state.items.forEach(item => {
          itemsPrice += item.quantity * item.price;
        });
      }
    
      // Calculate total price for packaged items
      if (packagedItems) {
        packagedItems.forEach(item => {
          servicesPrice += item.quantity * item.price;
        });
      }
    
      // Calculate total price for assembled items
      if (assembledItems) {
        assembledItems.forEach(item => {
          servicesPrice += item.quantity * item.price;
        });
      }
    
      // Calculate total price for disassembled items
      if (disassembledItems) {
        disassembledItems.forEach(item => {
          servicesPrice += item.quantity * item.price;
        });
      }
    
      // Calculate total price for storage items
      if (storageItems) {
        storageItems.forEach(item => {
          servicesPrice += item.quantity * item.price;
        });
      }
    
      // Calculate total price for crane items
      if (craneItems) {
        craneItems.forEach(item => {
          servicesPrice += item.quantity * item.price;
        });
      }
    
      // Calculate total cost based on boxes (each box costs $15)
      boxesPrice = boxes * 15;
    
      // Calculate additional cost based on elevator for baseline floor
      let additionalCostBaseline = 0;
      if (baseline && baseline.elevator === 'no') {
        additionalCostBaseline = totalPrice * (baseline.floor * 0.1); // 10% additional cost for each baseline floor
      }
    
      // Calculate additional cost based on elevator for destination floor
      let additionalCostDestination = 0;
      if (destination && destination.elevator === 'no') {
        additionalCostDestination = totalPrice * (destination.floor * 0.1); // 10% additional cost for each destination floor
      }

      distancePrice += additionalCostBaseline + additionalCostDestination
    
      // Calculate total price including additional costs
      totalPrice += itemsPrice + servicesPrice + distancePrice + boxesPrice;
    
      // Return the calculated result
      return { ...state, totalPrice: totalPrice, distancePrice: distancePrice, itemsPrice:itemsPrice, boxesPrice:boxesPrice, servicesPrice:servicesPrice };
    }
    
  },
});

export const { 
  addItems, addBaseline, addDestination, addBoxes, addPackagedItems, changeItemQuantity, changePackagedItemQuantity, removeItem, removePackagedItem,
  addAssembledItems,
  changeAssembledItemQuantity,
  removeAssembledItem,
  addDisassembledItems,
  changeDisassembledItemQuantity,
  removeDisassembledItem,
  addCraneItems,
  changeCraneItemQuantity,
  removeCraneItem,
  addStorageItems,
  changeStorageItemQuantity,
  removeStorageItem,
  setStorageStartDay,
  setStorageEndDay,
  calculate

} = mainSlice.actions;

export default mainSlice.reducer;
