'use client'
import { fetcher } from '@/utils/fetcher'
import Loading from '@/utils/Loading'
import useSWR, { SWRResponse } from 'swr'
import { ProductCard } from '../ui/ProductCard'
import { Section } from '../ui/Section'

interface Product {
	title: string
	description: string
	price: number
	_id: string
}

export const LatestShop = () => {
	const { data, isLoading, error }: SWRResponse<any, any, any> = useSWR(
		{ url: `${process.env.BACK_PORT}products` },
		fetcher
	)

	return (
		<div className='mt-[21px] md:mt-[64px]'>
			<Section
				title='Shop The Latest'
				postTitle='View All'
				postTitleLink='/shop'
			>
				<div
					className={`duration-300 ${
						data ? 'opacity-0 absolute -z-10' : 'opacity-100'
					}`}
				>
					<Loading />
				</div>
				<div className='flex justify-center'>
					<div className='flex sm:justify-center md:justify-normal flex-wrap gap-[8px] sm:gap-[20px] md:gap-[30px] lg:gap-[52px] xl:gap-[57px]'>
						{data?.map((product: Product, i: number) => (
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
