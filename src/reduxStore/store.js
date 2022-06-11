import { configureStore  } from '@reduxjs/toolkit'

import logReducer from './logSlice';
import balanceReducer from './balanceSlice';

export const store = configureStore({
    reducer: {
        logInfo: logReducer,
        balanceInfo: balanceReducer
    }
})