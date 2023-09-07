import { createSlice } from '@reduxjs/toolkit'
import { getAllProducts } from './shopActions'

const initialState = {
  startData: null,
  products: null,
  loading: false,
  error: null,
}
export const shop = createSlice({
  name: 'shop',
  initialState,
  reducers: {

  },
  extraReducers: {
    // login user
    [getAllProducts.pending]: (state) => {
        state.loading = true
        console.log("loading");
        state.error = null
    },
    [getAllProducts.fulfilled]: (state, { payload }) => {
        state.loading = false
        state.products = payload.products
    },
    [getAllProducts.rejected]: (state, { payload }) => {
        state.loading = false
        console.log(payload);
        state.error = payload
    },
},
})

// Action creators are generated for each case reducer function
export const {  } = shop.actions

export default shop.reducer