'use client'
import { ProductCard } from '@/components/ui/ProductCard'
import { Section } from '@/components/ui/Section'
import { SideBar } from '@/components/ui/SideBar'
import { fetcher } from '@/utils/fetcher'
import Image from 'next/image'
import { useState } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import useSWR, { SWRResponse } from 'swr'

interface Product {
	title: string
	description: string
	price: number
	_id: string
}

export default function Shop() {
	const [searchProduct, setSearchProduct] = useState('')

	const { data, error, isLoading }: SWRResponse<any, any, any> = useSWR(
		{ url: `${process.env.BACK_PORT}products` },
		fetcher
	)

	return (
		<Section>
			<SideBar title='Shop The Latest' titleMobile='Shop'>
				<div className='flex flex-col md:flex-row items-start gap-[16px] md:gap-[36px] mt-[16px] md:mt-[39px]'>
					{/* ФИЛЬТРЫ ДЛЯ ТОВАРОВ (ONLY PC) */}
					<div className='hidden md:flex flex-col gap-[39px]'>
						<div className='flex justify-between items-center w-[261px] pb-[11px] border-b-[1px] border-b-[#D8D8D8]'>
							<input
								className='w-full outline-none bg-transparent placeholder:text-[#707070] text-[14px] font-normal leading-[22px] text-black'
								onChange={(e) => setSearchProduct(e.target.value)}
								type='text'
								value={searchProduct}
								placeholder='Search...'
							/>
							<div className='relative size-[19px]'>
								<Image src={'/search.svg'} fill alt='search' />
							</div>
						</div>
						{/* КАТЕГОРИИ И ВИДЫ СОРТИРОВКИ */}
						<div className='flex flex-col gap-[16px]'>
							<div className='flex justify-between items-center w-[261px] h-[53px] rounded-[4px] border-[1px] border-[#D8D8D8] px-[12px] cursor-pointer'>
								<p className='text-[14px] font-normal leading-[22px]'>
									Shop By
								</p>
								<div className='relative w-[12px] h-[18px]'>
									<Image src={'/drop-arrow.svg'} fill alt='drop-arrow' />
								</div>
							</div>
							<div className='flex justify-between items-center w-[261px] h-[53px] rounded-[4px] border-[1px] border-[#D8D8D8] px-[12px] cursor-pointer'>
								<p className='text-[14px] font-normal leading-[22px]'>
									Sort By
								</p>
								<div className='relative w-[12px] h-[18px]'>
									<Image src={'/drop-arrow.svg'} fill alt='drop-arrow' />
								</div>
							</div>
						</div>
						{/* Ползунок с прайсом */}
						<div>
							<div className='w-full h-[2px] bg-black mb-[8px]'></div>
							<div className='flex items-center justify-between'>
								<p className='text-[14px] text-[#707070] font-normal leading-[22px]'>
									Price: $40 - $180
								</p>
								<p className='text-[14px] text-[#A18A68] font-normal leading-[22px]'>
									Filter
								</p>
							</div>
						</div>
						{/* НАСТРОЙКИ ПО ВЫСШИМ КАТЕГОРИЯМ */}
						<div className='flex items-center justify-between'>
							<p className='text-[16px] font-normal leading-[27px]'>On sale</p>
							<div className='flex items-center justify-start w-[33px] h-[20px] bg-[#707070] rounded-full cursor-pointer'>
								<div className='size-[14px] rounded-full bg-white mx-[2px]'></div>
							</div>
						</div>
						<div className='flex items-center justify-between'>
							<p className='text-[16px] font-normal leading-[27px]'>In stock</p>
							<div className='flex items-center justify-start w-[33px] h-[20px] bg-[#707070] rounded-full cursor-pointer'>
								<div className='size-[14px] rounded-full bg-white mx-[2px]'></div>
							</div>
						</div>
					</div>
					{/* ФИЛЬТРЫ ДЛЯ ТОВАРОВ (ONLY MOBILE) */}
					<div className='flex md:hidden items-center gap-[8px]'>
						<div className='relative buttonActive size-[18px]'>
							<Image src={'/filters.svg'} fill alt='filters' />
						</div>
						<p className='text-[12px] text-[#A18A68] font-normal leading-[20px]'>
							Filters
						</p>
					</div>
					{/* ТОВАРЫ */}
					<div className='flex justify-center w-full'>
						<div
							className={`flex items-center mb-[40px] justify-center w-full  ${
								isLoading ? 'block' : 'opacity-0 ml-[100%] fixed'
							}`}
						>
							<AiOutlineLoading3Quarters
								className={`animate-spin size-[50px] lg:size-[100px] `}
							/>
						</div>
						<div
							className={`flex justify-center duration-300 ${
								isLoading ? 'opacity-0 mt-[100%] absolute' : 'block'
							}`}
						>
							<div className='flex sm:justify-center md:justify-normal flex-wrap gap-[8px] sm:gap-[16px] md:gap-[18px] xl:gap-[22px]'>
								{data?.map((product: Product, i: number) => (
									<ProductCard
										customSize='w-[156px h-[208px] sm:w-[180px] sm:h-[280px] md:w-[200px] md:h-[280px] lg:w-[200px] lg:h-[292px] xl:w-[300px] xl:h-[392px] mb-[31px]'
										customSizeImg='size-[156px] sm:size-[180px] md:h-[210px] md:w-full lg:h-[220px] xl:h-[300px]'
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
					</div>
				</div>
			</SideBar>
		</Section>
	)
}
