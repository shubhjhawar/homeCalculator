import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from '../slices/slices';


const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
});

export default store;