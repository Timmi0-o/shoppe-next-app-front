import { fetcher } from '@/utils/fetcher'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import useSWR, { SWRResponse } from 'swr'
import { useUser } from './useUser'

interface OrderData {
	user: string
	orders: OrderProductData[]
}

interface OrderProductData {
	number: number
	email: string
	paymentMethod: string
	date: string
	deliveryOptions: string
	deliveryAddress: string
	contactPhone: string
	shipping: string
	productList: ProductList[]
}

interface ProductList {
	title: string
	totalPrice: number
}

interface OrdersPreview {
	number: number
	date: string
	status: string
	total: number
}

export const useOrder = () => {
	// USER
	const { user } = useUser()

	// ALL ORDERS
	const { data: allOrders }: SWRResponse<OrderData> = useSWR(
		() => (user ? { url: `${process.env.BACK_PORT}order/${user?._id}` } : null),
		fetcher
	)

	// ORDERS PREVIEWS
	const [ordersPreview, setOrdersPreview] = useState<OrdersPreview[] | null>(
		null
	)
	useEffect(() => {
		if (allOrders?.orders) {
			const newOrdersPreview = allOrders.orders.map((order) => {
				return {
					number: order.number,
					date: order.date,
					status: 'Delivered',
					total: order.productList.reduce(
						(sum, product) => sum + product.totalPrice,
						0
					),
				}
			})
			setOrdersPreview(newOrdersPreview)
		}
	}, [allOrders])

	// GET ONE ORDER
	const orderNumber = useSelector((state: any) => state.order.orderNumber)
	const { data: oneOrder }: SWRResponse<OrderProductData> = useSWR(
		() =>
			user
				? { url: `${process.env.BACK_PORT}order/${user?._id}/${orderNumber}` }
				: null,
		fetcher
	)

	return {
		allOrders,
		ordersPreview,
		oneOrder,
	}
}
