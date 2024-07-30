'use client'
import { createSlice } from '@reduxjs/toolkit'

export const orderSlice = createSlice({
	name: 'order',
	initialState: {
		orderNumber: '',
	},
	reducers: {
		setOrderNumber: (state, action) => {
			state.orderNumber = action.payload
		},
	},
})

export const { setOrderNumber } = orderSlice.actions
