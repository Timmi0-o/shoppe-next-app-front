import { fetcher } from '@/utils/fetcher'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import useSWR, { SWRResponse } from 'swr'

export const useProduct = () => {
	// CURRENT PRODUCT ID
	const path = usePathname()
	// const productId = path.split('/')[2]
	// console.log('path', path)

	const [productId, setProductId] = useState<string>('')
	// // console.log('productId', productId)

	// ONE PRODUCT BY ID
	const {
		data: productData,
		mutate: mutateProductData,
	}: SWRResponse<any, any, any> = useSWR(
		() =>
			productId
				? { url: `${process.env.BACK_PORT}products/${productId}` }
				: null,
		fetcher
	)

	useEffect(() => {
		if (path.includes('product')) {
			setProductId(path.split('/')[2])
		}
	}, [path, productData])

	return {
		product: productData,
		mutateProductData,
		productId,
		setProductId,
	}
}
