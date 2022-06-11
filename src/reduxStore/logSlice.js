import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  role: 'visitor',
  isLogged: false,
  activeLoan: false
}

export const logSlice = createSlice({
  name: 'loginfo',
  initialState,
  reducers: {
    logIn: (state, {payload}) => {
      state.role = payload.role
      state.activeLoan = payload.loanStatus
      state.isLogged = true
    },
    logOut: (state) => {
        state.role = 'visitor'
        state.activeLoan = false
        state.isLogged = false
    }
  },
})

// Action creators are generated for each case reducer function
export const { logIn, logOut } = logSlice.actions

export default logSlice.reducer