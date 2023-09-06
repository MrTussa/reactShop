import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}
export const shop = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    
  },
})

// Action creators are generated for each case reducer function
export const {  } = shop.actions

export default shop.reducer