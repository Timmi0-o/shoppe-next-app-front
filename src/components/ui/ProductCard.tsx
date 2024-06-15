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
			className={`w-[150px] h-[200px] lg:w-[377px] lg:h-[472px] mb-[31px]`}
		>
			<div
				className={`relative size-[150px] lg:w-full lg:h-[380px] mb-[6px] sm:mb-[24px] duration-200 ${
					isItemHover && 'opacity-50'
				}`}
			>
				<Image src={img} fill alt='ItemImg' />
			</div>
			<p className='text-[14px] sm:text-[20px] font-normal mb-[4px] sm:mb-[16px]'>
				{title}
			</p>
			<p className='text-[12px] sm:text-[20px] font-bold text-[#A18A68]'>{`$ ${price}.00`}</p>
		</div>
	)
}
