'use client'
import { fetcher } from '@/utils/fetcher'
import axios from 'axios'
import { useEffect, useState } from 'react'
import useSWR, { SWRResponse } from 'swr'
import { useUser } from './useUser'

interface BasketData {
	user: string
	products: [
		{
			product: {
				_id: string
				description: string
				fullDescription: string
				price: number
				title: string
			}
			qty: number
		}
	]
}

export const useBasket = () => {
	// GET USER DATA
	const { user } = useUser()

	// GET BASKET DATA
	const {
		data: basketData,
		error: basketError,
		isLoading: basketIsLoading,
		mutate,
	}: SWRResponse<BasketData, any, any> = useSWR(
		() =>
			user
				? {
						url: `${process.env.BACK_PORT}basket/${user._id}`,
				  }
				: null,
		fetcher,
		{ refreshInterval: 800 }
	)

	// CALCULATED FULL ITEMS && END PRICE
	const [numberItems, setNumberItems] = useState(0)
	const [allPrice, setAllPrice] = useState(0)

	useEffect(() => {
		let countItems = 0
		let countAllPrice = 0
		basketData?.products.map((product) => {
			countItems += product.qty
			countAllPrice += product.product.price * product.qty
		})
		setNumberItems(countItems)
		setAllPrice(countAllPrice)
	}, [basketData])

	const deleteProductToBasket = async (idProduct: string) => {
		try {
			const response = await axios.delete(
				`${process.env.BACK_PORT}basket/delete-product`,
				{ data: { idUser: user._id, idProduct: idProduct } }
			)
			mutate()
			return response
		} catch (error: any) {
			console.log(error.responce.data)
		}
	}

	return {
		basketData,
		numberItems,
		allPrice,
		deleteProductToBasket,
		basketError,
		basketIsLoading,
	}
}
