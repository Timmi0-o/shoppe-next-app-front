import { configureStore } from '@reduxjs/toolkit'
import { tokenSlice } from './reducers/TokenReducer'

export const store = configureStore({
	reducer: { token: tokenSlice.reducer },
})
