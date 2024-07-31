import {
	orderTemporaryNotificationOpen,
	setOrderNumber,
} from '@/lib/reducers/Order'
import { fetcher } from '@/utils/fetcher'
import axios from 'axios'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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

export interface ProductList {
	title: string
	totalPrice: number
}

interface OrdersPreview {
	number: number
	date: string
	status: string
	total: number
}

interface AddNewOrderData {
	user: string
	email: string
	paymentMethod: string
	deliveryOptions: string
	deliveryAddress: string
	contactPhone: string
	shipping: string
	productList: ProductList[]
}

export const useOrder = () => {
	const path = usePathname()
	const orderNumberOld = path.split('/')[3]
	console.log('orderNumberOld', orderNumberOld)

	const dispatch = useDispatch()
	const router = useRouter()
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
	const newNumberOrder = useSelector((state: any) => state.order.orderNumber)
	const orderNumber = orderNumberOld || newNumberOrder
	const { data: oneOrder }: SWRResponse<OrderProductData> = useSWR(
		() =>
			user
				? { url: `${process.env.BACK_PORT}order/${user?._id}/${orderNumber}` }
				: null,
		fetcher
	)

	// ADD NEW ORDER
	const handleNewOrder = async (order: AddNewOrderData) => {
		try {
			const response = await axios.patch(`${process.env.BACK_PORT}order/add`, {
				...order,
			})
			if (response.data) {
				await axios.patch(`${process.env.BACK_PORT}basket/clear/${order.user}`)
				dispatch(setOrderNumber(response?.data))
				router.push(`/account/${user?.username}/${response?.data}`)
				dispatch(orderTemporaryNotificationOpen())
			}
		} catch (error) {
			console.error(error)
		}
	}

	return {
		allOrders,
		ordersPreview,
		oneOrder,
		handleNewOrder,
		orderNumberOld,
	}
}
