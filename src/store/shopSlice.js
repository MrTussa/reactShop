import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  startData: null,
  userCart: [],
  loading: false,
  error: null,
}
export const shop = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      state.userCart = [...state.userCart, payload]
    },
    clearCart: (state) => {
      state.userCart = []
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, clearCart } = shop.actions

export default shop.reducer