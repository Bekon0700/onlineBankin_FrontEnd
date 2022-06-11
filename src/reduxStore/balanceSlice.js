import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
  name: '',
  balance: 0,
  loan: 0
}

export const fetchBalance = createAsyncThunk(
    'balanceInfo/fetchBalance',
    async () => {
        const result = await axios.get('/api/v1/bank/myAccountInfo')
        return {
            name: result.data.clientName,
            balance: result.data.clientInfo.currentBalance,
            loan: result.data.clientInfo.loanAmount
        }
    }
)

const balanceSlice = createSlice({
  name: 'balanceInfo',
  initialState,
  reducers: {
    withdrawBalance: (state, {payload}) => {
        state.balance -= payload.withdrawAmount
        state.loan = state.loan
        state.name = state.name
    },
    depositBalance: (state, {payload}) => {
        state.balance += payload.depositAmount
        state.loan = state.loan
        state.name = state.name
    },

  },
  extraReducers: {
        [fetchBalance.pending]: () => {
            console.log('loading')
        },
        [fetchBalance.fulfilled]: (state, {payload}) => {
          state.balance = payload.balance
          state.loan = payload.loan
          state.name = payload.name
        },
        [fetchBalance.rejected]: () => {
            console.log('rejected')
        } 
  }
})

// Action creators are generated for each case reducer function
export const { withdrawBalance, depositBalance } = balanceSlice.actions

export default balanceSlice.reducer