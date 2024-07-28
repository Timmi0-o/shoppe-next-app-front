'use client'
import { useUser } from '@/components/hooks/useUser'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { MobileMenu } from './MobileMenu'
import { ShoppingBag } from './ShoppingBag'

interface PcNavigationProps {
	isNawActive: number | null
	setIsNawActive: Dispatch<SetStateAction<number | null>>
}

export const Navigation = ({
	isNawActive,
	setIsNawActive,
}: PcNavigationProps) => {
	let path = usePathname()

	// ВЫБОР АКТИВНОГО МЕНЮ В ЗАВИСИМОСТИ ОТ ССЫЛКИ (PC)
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
	}, [path, setIsNawActive])

	const [isShoppingBagShop, setIsShoppingBagShop] = useState(false)

	// GET USER DATA
	const { user } = useUser()

	const [href] = useState(
		user?.username ? `/account/${user.username}` : '/account'
	)

	const isOpenShoppingBag = () => {
		setIsShoppingBagShop(!isShoppingBagShop)
		isShoppingBagShop
			? ((document.body.style.overflowY = ''),
			  (document.body.style.paddingRight = ''))
			: ((document.body.style.overflowY = 'hidden'),
			  (document.body.style.paddingRight = '8px'))
	}

	// МАССИВ С НАВИГАЦИЕЙ ПО САЙТА ВКЛЮЧАЯ АККАУНТ
	const navigation = [
		{ img: '/search.svg', description: 'Поиск', href: '/search' },
		{
			img: '/shopping-cart.svg',
			description: 'Ваши покупки',
			onClick: () => {
				isOpenShoppingBag()
			},
		},
		{
			img: '/profile.svg',
			description: 'Профиль',
			href: href,
		},
	]

	// ДЛЯ ОТКРЫТИЯ МОДАЛКИ НА Mobile
	const [isShowModal, setIsShowModal] = useState(false)
	useEffect(() => {
		if (isShowModal) {
			document.body.style.overflowY = 'hidden'
		} else {
			document.body.style.overflowY = ''
		}
	}, [isShowModal])

	return (
		<>
			{/* PC НАВИГАЦИЯ */}
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
						<Button
							noStyle
							removeSize
							onClick={navigate.onClick}
							href={navigate.href}
							key={i}
						>
							<div className='flex justify-center items-center size-[32px] lg:hover:bg-[#f1f1f1] lg:active:bg-[#d9d9d9] rounded-[50%] duration-200'>
								<div className='relative size-[20px] cursor-pointer'>
									<Image src={navigate.img} fill alt='search' />
								</div>
							</div>
						</Button>
					))}
				</div>
			</div>
			{/* Mobile НАВИГАЦИЯ */}
			<div className='flex lg:hidden'>
				<div
					onClick={() => isOpenShoppingBag()}
					className='flex justify-center items-center relative size-[18px] mr-[15px] buttonActive'
				>
					<Image src={'/shopping-cart.svg'} fill alt='shopping-cart' />
				</div>
				<div
					onClick={() => setIsShowModal(!isShowModal)}
					className='relative buttonActive size-[20px]'
				>
					<Image src={'/burger.svg'} fill alt='burger' />
				</div>
				{/* Модальное окно burger */}
				<MobileMenu
					setIsShoppingBagShop={setIsShoppingBagShop}
					isShowModal={isShowModal}
					setIsShowModal={setIsShowModal}
				/>
			</div>
			{/* КОРЗИНА */}
			<ShoppingBag
				isShoppingBagShop={isShoppingBagShop}
				setIsShoppingBagShop={setIsShoppingBagShop}
			/>
		</>
	)
}

const nawLink = [
	{ title: 'Shop', href: '/shop' },
	{ title: 'Blog', href: '/blog' },
	{ title: 'Our Story', href: '/about' },
]
