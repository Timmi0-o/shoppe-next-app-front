'use client'
import { useBasket } from '@/components/hooks/useBasket'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'
import Link from 'next/link'
import { Dispatch, SetStateAction, useState } from 'react'
import { AiOutlineLoading } from 'react-icons/ai'
import { GoPlus } from 'react-icons/go'
import { HiOutlineMinus } from 'react-icons/hi'
import { IoCloseOutline } from 'react-icons/io5'

interface ShoppingBagProps {
	isShoppingBagShop: boolean
	setIsShoppingBagShop: Dispatch<SetStateAction<boolean>>
}

interface Products {
	product: {
		_id: string
		description: string
		fullDescription: string
		price: number
		title: string
	}
	qty: number
}

export const ShoppingBag = ({
	isShoppingBagShop,
	setIsShoppingBagShop,
}: ShoppingBagProps) => {
	const closeShoppingBag = () => {
		setIsShoppingBagShop(false)
		document.body.style.overflowY = ''
		document.body.style.paddingRight = ''
	}

	// ВКЛЮЧАЕТ ЗАГРУЗОЧНУЮ АНИМАЦИЮ
	const [isAction, setIsAction] = useState(false)
	const [productId, setProductId] = useState<null | string>(null)

	// GET BASKET DATA
	const { basketData, numberItems, allPrice, deleteProductToBasket } =
		useBasket()

	const handleDeleteProductToBasket = async (idProduct: string) => {
		setProductId(idProduct)
		setIsAction(true)
		const response = await deleteProductToBasket(idProduct)
		if (response) {
			setTimeout(() => {
				setIsAction(false)
			}, 1500)
		}
	}

	// useEffect(() => {
	// 	if (basketData) {
	// 		console.log('basketData', basketData)
	// 	}
	// })

	return (
		<div
			className={`flex justify-center fixed right-0 top-0 w-full lg:w-[400px] min-h-[100vh] border-[1px] border-[#D8D8D8] ease-in-out z-10 bg-white shadow-[#838383] ${
				isShoppingBagShop
					? 'opacity-100 translate-x-0 duration-500'
					: 'right-[-100%] duration-700'
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
					className={`text-[24px] text-[#00000099] text-center duration-300 mt-[50%] ${
						basketData && basketData.products.length
							? 'ml-[100%] absolute'
							: 'mt-0'
					}`}
				>
					The basket is empty...
				</p>
				{/* КАРТОЧКИ С ТОВАРАМИ И КНОПКОЙ ПОКУПКИ */}
				<div
					className={` duration-500 ${
						basketData && basketData.products.length
							? ''
							: 'ml-[100%] opacity-0'
					}`}
				>
					<p className='text-[#707070] text-[14px] mb-[3px]'>
						{numberItems} items
					</p>
					<div
						className={`shoppingBagItems flex justify-start flex-col  overflow-y-scroll h-[74vh] md:h-[76vh] lg:h-[80vh] xl:h-[72vh]`}
					>
						{basketData?.products.map((basket: Products, i: number) => (
							<div
								key={i}
								className={`relative flex gap-[20px] ${
									i + 1 === basketData.products.length
										? 'pb-[44px]'
										: 'pb-[22px] '
								}`}
							>
								{/* ONCLICK LOAD  */}
								<div
									className={`absolute size-full flex items-center  z-30 justify-center bg-[#ffffff95] mt-[-6%] ${
										isAction && productId === basket.product._id ? '' : 'hidden'
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
										href={`/product/${basket.product._id}`}
										key={i}
									>
										<div className='relative size-[136px] cursor-pointer'>
											<Image src={'/Item1.png'} fill alt='Item' />
										</div>
									</Link>
									<div className='flex flex-col justify-between text-[14px]'>
										<div>
											<p>{basket.product.title}</p>
											<p className='text-[#707070]'>Black / Medium</p>
											<p className='text-[#707070]'>{`$ ${basket.product.price},00`}</p>
										</div>
										<div className='flex items-center gap-[3px]'>
											<p className='mr-[6px]'>QTY:</p>
											<HiOutlineMinus className='cursor-pointer' />
											<p>{basket.qty}</p>
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
										onClick={() =>
											!isAction &&
											handleDeleteProductToBasket(basket.product._id)
										}
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
