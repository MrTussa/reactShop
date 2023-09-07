import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const backendURL = 'https://dummyjson.com'

export const getAllProducts = createAsyncThunk(
    'shop/getAllProducts',
    async () => {
      try {
        const { data } = await axios.get(`${backendURL}/products`)
        console.log(data);
        return data
      } catch (error) {
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message)
        } else {
          return rejectWithValue(error.message)
        }
      }
    }
  )
