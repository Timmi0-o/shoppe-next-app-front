import { configureStore } from '@reduxjs/toolkit'
import { productSlice } from './reducers/Product'

export const store = configureStore({
	reducer: { product: productSlice.reducer },
})
