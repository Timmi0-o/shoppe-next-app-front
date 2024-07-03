'use client'
import axios from 'axios'
import { useEffect, useState } from 'react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import 'swiper/css/thumbs'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ProductCard } from '../ui/ProductCard'

interface Product {
	title: string
	description: string
	price: number
	_id: string
}

export const SimilarProducts = () => {
	const [products, setProducts] = useState<Product[]>([])

	useEffect(() => {
		const GetProducts = async () => {
			try {
				const response = await axios.get(
					'https://shoppe-next-app-back-2.onrender.com/products'
				)
				setProducts(response.data)
			} catch (error) {
				console.error('Error fetching products:', error)
			}
		}

		GetProducts()
	}, [])
	return (
		<>
			<div className='hidden lg:block mb-[250px]'>
				<p className='text-[26px] font-normal leading-[35px] mb-[13px] lg:mb-[47px]'>
					Similar Items
				</p>
				<div className='flex sm:justify-center md:justify-normal flex-wrap gap-[8px] sm:gap-[20px] md:gap-[30px] lg:gap-[52px] xl:gap-[57px]'>
					{products.slice(0, 3).map((product, i) => (
						<ProductCard
							key={i}
							propsKey={i}
							img={'/Item2.png'}
							title={product.title}
							price={product.price}
							id={product._id}
						/>
					))}
				</div>
			</div>
			<div className='w-full block lg:hidden'>
				<Swiper
					spaceBetween={12}
					breakpoints={{
						320: {
							slidesPerView: 2.1,
						},
						640: {
							slidesPerView: 2.7,
						},
						770: {
							slidesPerView: 3.2,
						},
					}}
				>
					{products.map((product, i) => (
						<SwiperSlide key={i}>
							<ProductCard
								propsKey={i}
								img={'/Item2.png'}
								title={product.title}
								price={product.price}
								id={product._id}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</>
	)
}
