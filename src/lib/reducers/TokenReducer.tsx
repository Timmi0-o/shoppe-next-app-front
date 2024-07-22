'use client'
import { createSlice } from '@reduxjs/toolkit'

export const tokenSlice = createSlice({
	name: 'token',
	initialState: {
		token: '',
	},
	reducers: {
		getToken: (state) => {
			const token = localStorage.getItem('token')
			state.token = token || ''
		},
	},
})

export const { getToken } = tokenSlice.actions
