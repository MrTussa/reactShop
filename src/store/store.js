import { configureStore } from '@reduxjs/toolkit'
import storeSlice from './shopSlice'
import authReducer from './authSlice'
export const store = configureStore({
  reducer: {
      shop: storeSlice,
      auth: authReducer,
  },
})