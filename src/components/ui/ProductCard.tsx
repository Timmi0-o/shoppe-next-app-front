'use client'
import Image from 'next/image'
import { useState } from 'react'

interface ProductCardProps {
	img: string
	title: string
	price: number
	propsKey?: number
}

export const ProductCard = ({
	img,
	title,
	price,
	propsKey,
}: ProductCardProps) => {
	const [isItemHover, setIsItemsHover] = useState(false)
	return (
		<div
			onMouseEnter={() => setIsItemsHover(true)}
			onMouseLeave={() => setIsItemsHover(false)}
			key={propsKey}
			className={`w-[156px h-[208px]  sm:w-[180px] sm:h-[280px] md:w-[220px] md:h-[280px] lg:w-[285px] lg:h-[385px] xl:w-[377px] xl:h-[472px] mb-[31px]`}
		>
			<div
				className={`relative size-[156px] sm:size-[180px] md:h-[210px] md:w-full lg:h-[300px] xl:h-[370px] mb-[6px] sm:mb-[24px] duration-200 ${
					isItemHover && 'lg:opacity-50 active:opacity-50 lg:active:opacity-100'
				}`}
			>
				<Image src={img} fill alt='ItemImg' />
			</div>
			<p className='text-[12px] sm:text-[18px] font-normal mb-[4px] sm:mb-[16px]'>
				{title}
			</p>
			<p className='text-[12px] sm:text-[20px] font-bold text-[#A18A68]'>{`$ ${price}.00`}</p>
		</div>
	)
}
