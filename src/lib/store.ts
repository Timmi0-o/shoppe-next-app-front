import { configureStore } from '@reduxjs/toolkit'
import { orderSlice } from './reducers/Order'
import { productSlice } from './reducers/Product'

export const store = configureStore({
	reducer: { product: productSlice.reducer, order: orderSlice.reducer },
})
