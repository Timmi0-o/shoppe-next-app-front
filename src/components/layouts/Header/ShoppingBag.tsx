'use client'
import { useBasket } from '@/components/hooks/useBasket'
import { useProduct } from '@/components/hooks/useProduct'
import { useUser } from '@/components/hooks/useUser'
import { Button } from '@/components/ui/Button'
import { deletedProductInBasket } from '@/lib/reducers/Product'
import Image from 'next/image'
import Link from 'next/link'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { AiOutlineLoading } from 'react-icons/ai'
import { GoPlus } from 'react-icons/go'
import { HiOutlineMinus } from 'react-icons/hi'
import { IoCloseOutline } from 'react-icons/io5'
import { useDispatch } from 'react-redux'

interface ShoppingBagProps {
	isShoppingBagShop: boolean
	setIsShoppingBagShop: Dispatch<SetStateAction<boolean>>
}

export const ShoppingBag = ({
	isShoppingBagShop,
	setIsShoppingBagShop,
}: ShoppingBagProps) => {
	const dispatch = useDispatch()
	// CLOSED SHOPPING BAG
	const closeShoppingBag = () => {
		setIsShoppingBagShop(false)
		document.body.style.overflowY = ''
		document.body.style.paddingRight = ''
	}

	// BASKET
	const { basketData, numberItems, allPrice, deleteProductToBasket, isAction } =
		useBasket()

	// USER
	const { user } = useUser()
	// PRODUCT
	const { productId, setProductId } = useProduct()

	const [basketInformation, setBasketInformation] = useState('')

	useEffect(() => {
		if (user) {
			setBasketInformation('The basket is empty...')
		} else {
			setBasketInformation(
				'To add products to the cart, log in to your profile account!'
			)
		}
	}, [user])

	return (
		<div
			className={`flex justify-center fixed top-0 w-full lg:w-[400px] min-h-[100vh] border-[1px] border-[#D8D8D8] ease-in-out z-10 bg-white shadow-[#838383] duration-500 ${
				isShoppingBagShop
					? 'right-0'
					: 'right-[-100%] lg:right-[-50%] opacity-85'
			}`}
		>
			<div className='hidden absolute lg:flex items-center h-[100vh] left-[-70px]'>
				<IoCloseOutline
					onClick={() => closeShoppingBag()}
					color='white'
					className='size-[52px] cursor-pointer hover:rotate-[130deg] duration-500 ease-in-out bg-[#0000002f] rounded-[10px]'
				/>
			</div>
			<div className='mb-[24px] w-[80%] mx-auto'>
				{/* ЗАГОЛОВОК И СТРЕЛКА НАЗАД НА МОБИЛЕ */}
				<div className='flex items-center mt-[3.7vh] mb-[25px]  lg:mb-[17px]'>
					<div
						onClick={() => closeShoppingBag()}
						className='block lg:hidden relative w-[14px] h-[32px]'
					>
						<Image src={'/arrow-back.svg'} fill alt='arrow-back' />
					</div>
					<p className='text-[20px] text-center lg:text-left w-full duration-300'>
						Shopping bag
					</p>
				</div>
				{/* EMPTY BASKET  */}
				<p
					className={`text-[24px] text-[#00000099] text-center mt-[50%] duration-300 ease-in-out ${
						basketData || user ? 'mt-[-20px] absolute opacity-0 -z-20' : ''
					}`}
				>
					{basketInformation}
				</p>
				{/* КАРТОЧКИ С ТОВАРАМИ И КНОПКОЙ ПОКУПКИ */}
				<div
					className={`duration-500 ease-in-out ${
						basketData ? '' : 'ml-[30px] -z-20 absolute opacity-0'
					}`}
				>
					<p className='text-[#707070] text-[14px] mb-[3px]'>
						{numberItems} items
					</p>
					<div
						className={`shoppingBagItems flex justify-start flex-col  overflow-y-scroll h-[74vh] md:h-[76vh] lg:h-[80vh] xl:h-[72vh]`}
					>
						{Array.isArray(basketData) &&
							basketData.map((basket, i: number) => (
								<div
									onMouseEnter={() => setProductId(basket?.product?._id)}
									key={i}
									className={`relative flex gap-[20px] ${
										i + 1 === basketData?.length ? 'pb-[44px]' : 'pb-[22px] '
									}`}
								>
									{/* ONCLICK LOAD  */}
									<div
										className={`absolute size-full flex items-center  z-30 justify-center bg-[#ffffff95] mt-[-6%] ${
											isAction && productId === basket?.product?._id
												? ''
												: 'hidden'
										}`}
									>
										<AiOutlineLoading className='size-[1.5vw] animate-spin' />
									</div>

									<div className='flex gap-[8px] w-[290px] h-[136px]'>
										<Link
											onClick={() => {
												setIsShoppingBagShop(false)
												document.body.style.paddingRight = ''
												document.body.style.overflowY = ''
											}}
											href={`/product/${basket?.product?._id}`}
											key={i}
										>
											<div className='relative size-[136px] cursor-pointer'>
												<Image src={'/Item1.png'} fill alt='Item' />
											</div>
										</Link>
										<div className='flex flex-col justify-between text-[14px]'>
											<div>
												<p>{basket?.product?.title}</p>
												<p className='text-[#707070]'>Black / Medium</p>
												<p className='text-[#707070]'>{`$ ${basket?.product?.price},00`}</p>
											</div>
											{/* QTY  */}
											<div className='flex items-center gap-[3px]'>
												<p className='mr-[6px]'>QTY:</p>
												<HiOutlineMinus className='cursor-pointer' />
												<p>{basket?.qty}</p>
												<GoPlus className='cursor-pointer' />
											</div>
										</div>
									</div>
									{/* DELETE ITEM  */}
									<div
										className={`flex justify-center items-center size-[18px] rounded-full duration-300 ${
											isAction
												? 'opacity-50'
												: 'active:bg-[#D8D8D8] lg:hover:bg-[#D8D8D8] '
										}`}
									>
										<IoCloseOutline
											onClick={() => {
												dispatch(deletedProductInBasket())
												deleteProductToBasket(basket?.product?._id)
											}}
											color='black'
											className='size-[18px] cursor-pointer active:scale-[0.85] duration-200'
										/>
									</div>
								</div>
							))}
					</div>
					<div className='absolute bottom-[16vh] left-0 w-full h-[1px] bg-[#D8D8D8] z-10'></div>
					{/* КОЛ-ВО, СУММА И КНОПКА ПОСМОТРЕТЬ СПИСОК */}
					<div className='w-[80%] absolute bottom-[3vh] bg-white pt-[3vh] lg:pt-[3vh] xl:pt-[1.8vh]'>
						<div className='flex justify-between items-center text-[1.8vh] xl:text-[2.1vh] mb-[21px]'>
							<p>Subtotal ({numberItems} items)</p>
							<p>{`$ ${allPrice},00`}</p>
						</div>
						<Button
							onClick={() => closeShoppingBag()}
							href='/shopping-cart'
							removeSize
							className='h-[5.6vh]'
							titleSize='text-[1.7vh]'
							title='VIEW CART'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
