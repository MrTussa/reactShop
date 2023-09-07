import { createSlice } from '@reduxjs/toolkit'
import { getAllProducts } from './shopActions'

const initialState = {
  products: null,
}
export const shop = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    getProducts: () => {

    }
  },
  extraReducers: {
    // login user
    [getAllProducts.pending]: (state) => {
        state.loading = true
        state.error = null
    },
    [getAllProducts.fulfilled]: (state, { payload }) => {
        state.loading = false
        state.products = payload
    },
    [getAllProducts.rejected]: (state, { payload }) => {
        state.loading = false
        state.error = payload
    },
},
})

// Action creators are generated for each case reducer function
export const {  } = shop.actions

export default shop.reducer