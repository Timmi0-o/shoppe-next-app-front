'use client'
import { createSlice } from '@reduxjs/toolkit'

export const orderSlice = createSlice({
	name: 'order',
	initialState: {
		orderNumber: '',
		orderNotice: false,
	},
	reducers: {
		setOrderNumber: (state, action) => {
			state.orderNumber = action.payload
		},
		orderTemporaryNotificationOpen: (state) => {
			state.orderNotice = true
		},
		orderTemporaryNotificationClose: (state) => {
			state.orderNotice = false
		},
	},
})

export const {
	setOrderNumber,
	orderTemporaryNotificationOpen,
	orderTemporaryNotificationClose,
} = orderSlice.actions
