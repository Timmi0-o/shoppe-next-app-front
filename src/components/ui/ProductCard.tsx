'use client'
import Image from 'next/image'
import Link from 'next/link'
import { MouseEvent, useState } from 'react'

interface ProductCardProps {
	img: string
	title: string
	price: number
	propsKey?: number
	customSize?: string
	customSizeImg?: string
	id: string
}

export const ProductCard = ({
	img,
	title,
	price,
	propsKey,
	customSize,
	customSizeImg,
	id,
}: ProductCardProps) => {
	const [isItemHover, setIsItemsHover] = useState(false)
	const [isFastOption, setIsFastOption] = useState<null | number>(null)

	const handleClickFastOptions = (e: MouseEvent<HTMLAnchorElement>) => {
		if (isFastOption !== null) {
			e.preventDefault()
		}
	}

	return (
		<Link href={`/product/${id}`} onClick={handleClickFastOptions}>
			<div
				onMouseEnter={() => setIsItemsHover(true)}
				onMouseLeave={() => setIsItemsHover(false)}
				key={propsKey}
				className={`${
					customSize
						? customSize
						: 'relative w-[156px h-[208px] sm:w-[180px] sm:h-[280px] md:w-[220px] md:h-[280px] lg:w-[285px] lg:h-[385px] xl:w-[377px] xl:h-[472px] mb-[31px]'
				}`}
			>
				<div
					className={`relative ${
						customSizeImg
							? customSizeImg
							: 'size-[156px] sm:size-[180px] md:h-[210px] md:w-full lg:h-[300px] xl:h-[370px] active:opacity-50'
					} mb-[6px] sm:mb-[24px] duration-200 ${
						isItemHover && 'lg:opacity-50 active:opacity-50'
					}`}
				>
					<Image src={img} fill alt='ItemImg' />
					{/* БЫСТРЫЙ ПРОСМОТР, ЛАЙКИ В КОРЗИНУ */}
					<div
						className={`hidden lg:flex absolute top-0 left-0 size-full justify-center items-center gap-[30px] duration-300 ${
							isItemHover ? 'opacity-100' : 'ml-[20px] scale-[0.7] opacity-0'
						}`}
					>
						{fastOptions.map((option, i) => (
							<div
								onMouseEnter={() => setIsFastOption(i)}
								onMouseLeave={() => setIsFastOption(null)}
								key={i}
								className={`relative ${option.size} lg:hover:scale-[1.1] duration-200`}
							>
								<Image src={option.img} fill alt='shopping-cart' />
							</div>
						))}
					</div>
				</div>
				<p className='text-[12px] sm:text-[18px] font-normal mb-[4px] sm:mb-[16px]'>
					{title}
				</p>
				<p className='text-[12px] sm:text-[20px] font-bold text-[#A18A68]'>{`$ ${price}.00`}</p>
			</div>
		</Link>
	)
}

const fastOptions = [
	{ img: '/shopping-cart.svg', size: 'size-[25px]' },
	{ img: '/view.svg', size: 'size-[32px]' },
	{ img: '/like-product.svg', size: 'size-[25px]' },
]
