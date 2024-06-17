'use client'
import { ProductCard } from '@/components/ui/ProductCard'
import { Section } from '@/components/ui/Section'
import Image from 'next/image'
import { useState } from 'react'

export default function Shop() {
	const [searchProduct, setSearchProduct] = useState('')
	return (
		<Section>
			<div className='mt-[24px] mb-[60px] md:mb-[120px] md:mt-[150px]'>
				<p className='hidden md:block text-[33px] font-medium leading-[43px]'>
					Shop The Latest
				</p>
				<p className='block md:hidden text-[20px] font-medium leading-[26px]'>
					Shop
				</p>
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
					</div>
					{/* ФИЛЬТРЫ ДЛЯ ТОВАРОВ (ONLY MOBILE) */}
					<div className='flex md:hidden items-center gap-[8px]'>
						<div className='relative size-[18px]'>
							<Image src={'/filters.svg'} fill alt='filters' />
						</div>
						<p className='text-[12px] text-[#A18A68] font-normal leading-[20px]'>
							Filters
						</p>
					</div>
					<div className='flex justify-center'>
						<div className='flex sm:justify-center md:justify-normal flex-wrap gap-[8px] sm:gap-[16px] md:gap-[18px] xl:gap-[22px]'>
							{products.map((product, i) => (
								<ProductCard
									customSize='w-[156px h-[208px] sm:w-[180px] sm:h-[280px] md:w-[200px] md:h-[280px] lg:w-[200px] lg:h-[292px] xl:w-[300px] xl:h-[392px] mb-[31px]'
									customSizeImg='size-[156px] sm:size-[180px] md:h-[210px] md:w-full lg:h-[220px] xl:h-[300px]'
									key={i}
									propsKey={i}
									img={product.img}
									title={product.title}
									price={product.price}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</Section>
	)
}

const products = [
	{ img: '/Item1.png', title: 'Lira Earrings', price: 20 },
	{ img: '/Item2.png', title: 'Hal Earrings', price: 30 },
	{ img: '/Item3.png', title: 'Kaede Hair Pin Set Of 3 ', price: 35 },
	{ img: '/Item4.png', title: 'Hair Pin Set of 3', price: 25 },
	{ img: '/Item5.png', title: 'Plaine Necklace', price: 75 },
]
