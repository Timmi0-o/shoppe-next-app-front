'use client'
import { allertaStencil } from '@/utils/fonts'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Input } from '../ui/Input'
import { Section } from '../ui/Section'
import { MobileMenu } from './MobileMenu'

export const Header = () => {
	// Активна ссылка naw bar и добавляем бордер снизу шапки и бордер снизу link
	const [isNawActive, setIsNawActive] = useState<null | number>(null)
	// Стейты для поле поиска товаров
	const [searchText, setSearchText] = useState('')

	const [isShowModal, setIsShowModal] = useState(false)
	console.log('isShowModal', isShowModal)

	let path = usePathname()
	console.log('path', path)

	useEffect(() => {
		if (isShowModal) {
			document.body.style.overflowY = 'hidden'
		} else {
			document.body.style.overflowY = ''
		}
	}, [isShowModal])

	return (
		<Section>
			<div
				className={`flex justify-between items-center h-[42px] mt-[5px] sm:mt-[64px] ${
					path !== '/' && 'mb-[17px] lg:mb-[125px]'
				} ${
					isNawActive !== null &&
					'pt-[17px] md:border-b-[1px] md:border-b-[#D8D8D8] pb-[24px]'
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
					className={`hidden md:flex ${
						isNawActive !== null ? ' items-start' : 'items-center'
					}`}
				>
					<div className='flex gap-[64px] mr-[48px]'>
						{nawLink.map((link, i) => (
							<Link onClick={() => setIsNawActive(i)} key={i} href={link.href}>
								<p
									className={`font-regular text-[16px] leading-[27px] cursor-pointer ${
										isNawActive === i &&
										'border-b-[2px] border-b-black pb-[24px]'
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
							<div
								className='flex justify-center items-center size-[32px] lg:hover:bg-[#f1f1f1] lg:active:bg-[#d9d9d9] rounded-[50%] duration-200'
								key={i}
							>
								<div className='relative size-[20px] cursor-pointer'>
									<Image src={navigate.img} fill alt='search' />
								</div>
							</div>
						))}
					</div>
				</div>
				{/* Мобильная навигация (shop cart & burger) */}
				<div className='flex gap-[16px] md:hidden'>
					<div className='relative size-[18px]'>
						<Image src={'/shopping-cart.svg'} fill alt='search' />
					</div>
					<div
						onClick={() => setIsShowModal(!isShowModal)}
						className='relative w-[20px] h-[15px]'
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
			<div className={'block md:hidden'}>
				<Input state={searchText} setState={setSearchText} />
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
	{ title: 'Blog', href: '#' },
	{ title: 'Our Story', href: '#' },
]

const navigation = [
	{ img: '/search.svg', description: 'Поиск' },
	{ img: '/shopping-cart.svg', description: 'Ваши покупки' },
	{ img: '/profile.svg', description: 'Профиль' },
]

const mobileCategory = [
	{ title: 'Earring', link: '#' },
	{ title: 'Necklace', link: '/' },
	{ title: 'Serge', link: '#' },
	{ title: 'Watch', link: '#' },
	{ title: 'Phone', link: '#' },
]
