'use client'
import { allertaStencil } from '@/utils/fonts'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { InputSearch } from '../ui/Input'
import { Section } from '../ui/Section'
import { MobileMenu } from './MobileMenu'

export const Header = () => {
	// Активна ссылка naw bar и добавляем бордер снизу шапки и бордер снизу link
	const [isNawActive, setIsNawActive] = useState<null | number>(null)
	// Стейты для поле поиска товаров
	const [searchText, setSearchText] = useState('')

	const [isShowModal, setIsShowModal] = useState(false)

	let path = usePathname()

	useEffect(() => {
		if (isShowModal) {
			document.body.style.overflowY = 'hidden'
		} else {
			document.body.style.overflowY = ''
		}
	}, [isShowModal])

	useEffect(() => {
		if (path.includes('/product')) {
			setIsNawActive(0)
		}
		if (path === '/shop') {
			setIsNawActive(0)
		}
		if (path === '/blog') {
			setIsNawActive(1)
		}
		if (path === '/blog/details') {
			setIsNawActive(1)
		}
	}, [path])

	return (
		<Section>
			<div
				className={`flex justify-between items-center ease-out mt-[15px] ${
					path !== '/' ? 'mb-[17px] lg:mb-[96px]' : 'mb-[17px] md:mb-0'
				} ${
					isNawActive !== null
						? 'lg:pt-[17px] md:border-b-[1px] md:border-b-[#D8D8D8] lg:pb-[12px] sm:mt-[48px]'
						: 'lg:mt-[64px] md:border-b-transparent'
				}`}
			>
				{/* LOGO */}
				<Link href={'/'}>
					<div
						onClick={() => setIsNawActive(null)}
						className={
							'flex text-[20px] sm:text-[28px] md:text-[35px] cursor-pointer ' +
							allertaStencil.className
						}
					>
						<p className='text-[#A18A68]'>S</p>HOPPE
					</div>
				</Link>
				{/* ПК навигация (naw bar, search, shop cart & burger) */}
				<div
					className={`hidden lg:flex ${
						isNawActive !== null
							? 'items-start translate-y-[12px]'
							: 'items-center'
					}`}
				>
					<div className='flex gap-[64px] mr-[48px] '>
						{nawLink.map((link, i) => (
							<Link onClick={() => setIsNawActive(i)} key={i} href={link.href}>
								<p
									className={`relative font-regular before:w-full before:absolute before:h-[2px] before:left-0 before:top-[52px] before:bg-[#000000] before:px-[2px] before:ease-out text-[16px] leading-[27px] before:origin-left ${
										isNawActive === i
											? 'pb-[24px] before:scale-x-[1] before:duration-300'
											: `before:scale-x-[0] ${
													isNawActive !== null && 'before:duration-300'
											  }`
									}`}
								>
									{link.title}
								</p>
							</Link>
						))}
					</div>
					<div className='bg-[#707070] w-[1px] h-[17px]'></div>
					{/* Навигация (search, shop cart & profile (only PC) ) */}
					<div className='flex ml-[48px] gap-[19px]'>
						{navigation.map((navigate, i) => (
							<Link href={navigate.href} key={i}>
								<div className='flex justify-center items-center size-[32px] lg:hover:bg-[#f1f1f1] lg:active:bg-[#d9d9d9] rounded-[50%] duration-200'>
									<div className='relative buttonActive size-[20px] cursor-pointer'>
										<Image src={navigate.img} fill alt='search' />
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
				{/* Мобильная навигация (shop cart & burger) */}
				<div className='flex lg:hidden'>
					<div className='flex justify-center items-center relative size-[18px] mr-[15px] buttonActive'>
						<Image src={'/shopping-cart.svg'} fill alt='search' />
					</div>
					<div
						onClick={() => setIsShowModal(!isShowModal)}
						className='relative buttonActive size-[20px]'
					>
						<Image src={'/burger.svg'} fill alt='burger' />
					</div>
					{/* Модальное окно burger */}
					<MobileMenu
						isShowModal={isShowModal}
						setIsNawActive={setIsNawActive}
						setIsShowModal={setIsShowModal}
					/>
				</div>
			</div>
			<div className={'block lg:hidden mb-[39px]'}>
				<div className={`${path.includes('/product') ? 'hidden' : ''}`}>
					<InputSearch state={searchText} setState={setSearchText} />
				</div>
				<div className={`mt-[16px] ${path !== '/' && 'hidden'}`}>
					<Swiper
						slideToClickedSlide
						className='rounded-[4px]'
						spaceBetween={8}
						breakpoints={{
							360: {
								slidesPerView: 2.1,
							},
							640: {
								slidesPerView: 3.2,
							},
							770: {
								slidesPerView: 4.5,
							},
						}}
					>
						{mobileCategory.map((category, i) => (
							<SwiperSlide key={i}>
								<div
									className='flex justify-center items-center w-[140px] h-[40px] border-[1px] border-[#D8D8D8] rounded-[4px]'
									key={i}
								>
									<Link href={category.link}>
										<p className='text-[12px] font-normal leading-[20px]'>
											{category.title}
										</p>
									</Link>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</Section>
	)
}

const nawLink = [
	{ title: 'Shop', href: '/shop' },
	{ title: 'Blog', href: '/blog' },
	{ title: 'Our Story', href: '/about' },
]

const navigation = [
	{ img: '/search.svg', description: 'Поиск', href: '/search' },
	{
		img: '/shopping-cart.svg',
		description: 'Ваши покупки',
		href: '#',
	},
	{ img: '/profile.svg', description: 'Профиль', href: '/account' },
]

const mobileCategory = [
	{ title: 'Earring', link: '#' },
	{ title: 'Necklace', link: '#' },
	{ title: 'Serge', link: '#' },
	{ title: 'Watch', link: '#' },
	{ title: 'Phone', link: '#' },
]
