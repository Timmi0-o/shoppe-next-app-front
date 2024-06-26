'use client'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { ProductCard } from '../ui/ProductCard'
import { Section } from '../ui/Section'

interface Product {
	title: string
	description: string
	price: number
	_id: string
}

export const LatestShop = () => {
	const [products, setProducts] = useState<Product[]>([])

	useEffect(() => {
		const GetProducts = async () => {
			try {
				const response = await axios.get('http://localhost:5000/products')
				setProducts(response.data)
			} catch (error) {
				console.error('Error fetching products:', error)
			}
		}

		GetProducts()
	}, [])

	return (
		<div className='mt-[21px] md:mt-[64px]'>
			<Section
				title='Shop The Latest'
				postTitle='View All'
				postTitleLink='/shop'
			>
				<div className='flex justify-center'>
					<div className='flex sm:justify-center md:justify-normal flex-wrap gap-[8px] sm:gap-[20px] md:gap-[30px] lg:gap-[52px] xl:gap-[57px]'>
						{products.map((product, i) => (
							<ProductCard
								key={i}
								propsKey={i}
								img={'/Item1.png'}
								title={product.title}
								price={product.price}
								id={product._id}
							/>
						))}
					</div>
				</div>
			</Section>
		</div>
	)
}
