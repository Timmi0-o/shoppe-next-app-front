'use client'
import { fetcher } from '@/utils/fetcher'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import 'swiper/css/thumbs'
import { Swiper, SwiperSlide } from 'swiper/react'
import useSWR, { SWRResponse } from 'swr'
import { ProductCard } from '../ui/ProductCard'
import { LatestShopLoading } from './Loading/LatestShopLoading'

interface Product {
	title: string
	description: string
	price: number
	_id: string
}

export const SimilarProducts = () => {
	const { data, isLoading }: SWRResponse<any, any, any> = useSWR(
		{ url: `${process.env.BACK_PORT}products` },
		fetcher,
		{ refreshInterval: 300000 }
	)

	return (
		<>
			<div
				className={`flex items-center mb-[40px] justify-center w-full ${
					isLoading ? 'block' : 'opacity-100 ml-[100%] fixed'
				}`}
			>
				<LatestShopLoading />
			</div>
			<div
				className={`${isLoading ? 'opacity-0 ml-[100%] absolute' : 'block'}`}
			>
				<div className='hidden lg:block mb-[250px]'>
					<p className='text-[26px] font-normal leading-[35px] mb-[13px] lg:mb-[47px]'>
						Similar Items
					</p>
					<div className='flex sm:justify-center md:justify-normal flex-wrap gap-[8px] sm:gap-[20px] md:gap-[30px] lg:gap-[52px] xl:gap-[57px]'>
						{data?.slice(0, 3).map((product: Product, i: number) => (
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
						{data?.map((product: Product, i: number) => (
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
			</div>
		</>
	)
}
