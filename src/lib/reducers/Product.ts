'use client'
import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
	name: 'product',
	initialState: {
		productInBasket: false,
	},
	reducers: {
		addedProductInBasket: (state) => {
			state.productInBasket = true
		},
		deletedProductInBasket: (state) => {
			state.productInBasket = false
		},
	},
})

export const { addedProductInBasket, deletedProductInBasket } =
	productSlice.actions
