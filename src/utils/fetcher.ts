import axios from 'axios'

interface fetcherType {
	post?: {}
	url: string
}

export const fetcher = async ({ url, post }: fetcherType) => {
	try {
		if (url === undefined) {
			return undefined
		}
		if (!post) {
			const response = await axios.get(url)
			return response.data
		} else {
			const response = await axios.post(url, post)
			return response.data
		}
	} catch (error: any) {
		throw error.response?.data ?? error.response.data.message
	}
}

// interface FetcherType {
// 	url: string
// 	method?: 'GET' | 'POST'
// 	data?: {}
// }

// export const fetcher = async ({ url, method = 'GET', data }: FetcherType) => {
// 	try {
// 		if (!url) {
// 			throw new Error('URL is required')
// 		}
// 		const response = await axios(url, { method, data })
// 		return response.data
// 	} catch (error: any) {
// 		throw error.response?.data ?? error.message
// 	}
// }
