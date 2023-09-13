import { createSlice } from '@reduxjs/toolkit'
import { registerUser, userLogin } from './authActions'

// initialize userToken from local storage
const userToken = localStorage.getItem('userToken')
    ? localStorage.getItem('userToken')
    : null
const userInfo = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null
    console.log(userToken);
const initialState = {
    loading: false,
    userInfo,
    userToken,
    error: null,
    success: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logoutUser: (state) => {
            state.userInfo = null
            state.userToken = null
        },
    },
    extraReducers: {
        // login user
        [userLogin.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [userLogin.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.userInfo = payload
            state.userToken = payload.token
        },
        [userLogin.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
        // register user
        [registerUser.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [registerUser.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.success = true
        },
        [registerUser.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
    },
})
export const { logoutUser } = authSlice.actions
export default authSlice.reducer