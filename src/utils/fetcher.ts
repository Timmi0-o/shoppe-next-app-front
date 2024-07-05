'use client'
import axios from 'axios'

interface fetcherType {
	post?: {}
	url: string
}

export const fetcher = async ({ url, post }: fetcherType) => {
	try {
		if (!post) {
			const response = await axios.get(url, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`,
				},
			})
			return response.data
		} else {
			const response = await axios.post(url, post, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`,
				},
			})
			return response.data
		}
	} catch (error: any) {
		throw error.response?.data ?? error.response.data.message
	}
}
