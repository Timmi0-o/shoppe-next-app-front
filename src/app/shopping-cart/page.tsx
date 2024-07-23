'use client'
import { DropMenu } from '@/components/layouts/DropMenu'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Section } from '@/components/ui/Section'
import { fetcher } from '@/utils/fetcher'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { IoClose } from 'react-icons/io5'
import useSWR, { SWRResponse } from 'swr'

interface BasketData {
	user: string
	products: [
		{
			product: {
				_id: string
				description: string
				fullDescription: string
				price: number
				title: string
			}
			qty: number
		}
	]
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

export default function ShoppingCart() {
	const [coupon, setCoupon] = useState('')

	const [country, setCountry] = useState('SELECT A COUNTRY')
	const [city, setCity] = useState('CITY')

	// ПОЛУЧЕНИЕ ТОКЕНА НА КЛИЕНТЕ
	const [token, setToken] = useState<string | null>()
	useEffect(() => {
		if (window !== undefined && localStorage !== undefined) {
			const storedToken = localStorage.getItem('token')
			setToken(storedToken)
		}
	}, [])

	// GET USER ID
	const { data: userData } = useSWR(
		() => ({
			url: `${process.env.BACK_PORT}auth/${token}`,
		}),
		fetcher,
		{ refreshInterval: 800 }
	)

	// ПОЛУЧЕНИЕ КОРЗИНЫ
	const {
		data: basketData,
		error: basketError,
		isLoading: basketIsLoading,
	}: SWRResponse<BasketData, any, any> = useSWR(
		() =>
			userData
				? {
						url: `${process.env.BACK_PORT}basket/${userData._id}`,
				  }
				: null,
		fetcher,
		{ refreshInterval: 800 }
	)

	// CALCULATED FULL ITEMS && END PRICE
	const [numberItems, setNumberItems] = useState(0)
	const [allPrice, setAllPrice] = useState(0)

	useEffect(() => {
		let countItems = 0
		let countAllPrice = 0
		basketData?.products.map((product) => {
			countItems += product.qty
			countAllPrice += product.product.price * product.qty
		})
		setNumberItems(countItems)
		setAllPrice(countAllPrice)
	}, [basketData])

	useEffect(() => {
		if (userData && basketData) {
			console.log('basketData', basketData)
			// console.log('userId', userId)
		}
	})

	return (
		<Section>
			{/* TITLE */}
			<h1 className='text-[16px] md:text-[33px] lg:font-semibold text-left md:text-center mb-[16px] lg:mb-[64px]'>
				Shopping Cart
			</h1>
			{/* RIGHT & LEFT COMPONENTS */}
			<div className='flex flex-col lg:flex-row w-full mb-[200px]'>
				{/* LEFT COMPONENT */}
				<div className='flex flex-col items-end gap-[22px] md:gap-0 w-full lg:w-[500px]  xl:w-[580px]'>
					{/* PRODUCT & BUTTON UPDATE CART */}
					<div
						className={`shopping-cart-scroll w-full overflow-x-hidden flex flex-col gap-[22px] md:gap-[39px] h-fit lg:h-[610px] overflow-y-hidden lg:overflow-y-auto mb-[39px]`}
					>
						{basketData?.products.map((basket: Products, i: number) => (
							<div
								key={i}
								className='pb-0 md:pb-[39px] md:border-b-[1px] border-b-[#D8D8D8]'
							>
								<div className='flex justify-between h-[136px] rounded-[12px]'>
									<div className='flex w-full'>
										<div className='flex items-center justify-start w-[175px]'>
											<div className='relative size-[136px] mr-[8px] md:mr-[39px]'>
												<Image src={'/Item2.png'} fill alt='Item' />
											</div>
										</div>
										<div className='flex flex-col justify-between md:flex-row  w-full'>
											<div>
												<p className='text-[12px] md:text-[20px] md:mb-[14px] w-fit'>
													{basket.product.title}
												</p>
												<p className='text-[12px] md:text-[16px] mb-[2px]'>
													Black / Medium
												</p>
												<p className='text-[12px] md:text-[16px] text-[#A18A68]'>
													{`$ ${basket.product.price},00`}
												</p>
											</div>
											{/* QTY SELECTION ON PRODUCT */}
											<div className='flex items-center justify-center w-[40px] lg:w-[102px] h-[26px] lg:h-[53px] bg-[#EFEFEF] rounded-[4px] mr-[23px]'>
												<div className='hidden lg:block p-[10px] border border-transparent active:border-[#00000034] cursor-pointer rounded-[4px] duration-300'>
													<div className='w-[9px] h-[1px] bg-[#707070]'></div>
												</div>
												<div className='flex justify-center items-center px-[15p] size-[24px]'>
													<p className='text-[16px] text-[#707070] leading-[27px]'>
														{basket.qty}
													</p>
												</div>
												<div className='hidden lg:block p-[10px] border border-transparent active:border-[#00000034] cursor-pointer rounded-[4px] duration-300'>
													<div className='flex justify-center items-center w-[9px] h-[1px] bg-[#707070] cursor-pointer'>
														<div className='w-[1px] h-[9px] bg-[#707070]'></div>
													</div>
												</div>
											</div>
										</div>
									</div>
									{/* DELETE PRODUCT AT CART */}
									<div className='w-[20px]'>
										<IoClose className='size-[20px] cursor-pointer' />
									</div>
								</div>
							</div>
						))}
						<h2
							className={`duration-[500] ease-in-out text-[24px] text-[#00000071] text-center ${
								basketData?.products?.length ? 'hidden' : ''
							}`}
						>
							There are no items in the cart...
						</h2>
					</div>
					<div className='w-full lg:w-[168px] mb-[64px]'>
						<Button title='UPDATE CART' />
					</div>
					{/* ВВЕСТИ КУПОН И ПРИМЕНИТЬ */}
					<div className='flex flex-col lg:flex-row gap-[24px] lg:gap-0 justify-between w-full'>
						<div className='w-full lg:w-[336px]'>
							<Input
								state={coupon}
								setState={setCoupon}
								placeholder='Coupon Code'
							/>
						</div>
						<div className='w-full lg:w-[168px]'>
							<Button title='APPLY COUPON' />
						</div>
					</div>
				</div>
				{/* RIGHT COMPONENT */}
				<div className='py-[35px] mt-[39px] lg:mt-0 w-full lg:w-[350px] xl:w-[460px] ml-0 lg:ml-[100px] xl:ml-[150px] px-[10px] lg:px-0 rounded-[4px] bg-[#EFEFEF] lg:bg-transparent'>
					<div className='w-full flex justify-between items-start mb-[44px]'>
						<h1 className='text-[26px]'>Cart totals</h1>
						<p className='text-[18px] text-[#00000078]'>{`${numberItems} items`}</p>
					</div>
					<div className='flex justify-between border-b-[1px] border-b-[#D8D8D8] pb-[42px] mb-[42px]'>
						<div className='flex flex-col gap-[24px] w-[232px] text-[12px] md:text-[16px]'>
							<p>SUBTOTAL</p>
							<p>SHIPPING</p>
						</div>
						<div className='w-[250px]'>
							<div className='flex flex-col gap-[24px] w-[150px] md:w-[250px] mb-[39px] text-[12px] md:text-[16px]'>
								<p className='text-[#707070]'>{`$ ${allPrice},00`}</p>
								<p className='text-[#707070]'>
									Shipping costs will be calculated once you have provided
									address.
								</p>
							</div>
							<div className='mb-[25px]'>
								<DropMenu
									heightCustom='h-fit'
									list
									title='CALCULATE SHIPPING'
									dropLink={[
										<DropMenu
											list
											heightCustom='h-fit'
											underline
											title={country}
											setTitle={setCountry}
											key={0}
											dropLink={['USA', 'Russia', 'Germany', 'Japan']}
										/>,
										<DropMenu
											list
											heightCustom='h-fit'
											underline
											title={city}
											setTitle={setCity}
											key={1}
											dropLink={['Los Angeles', 'Askaban', 'New York']}
										/>,
										<DropMenu
											underline
											title='POST CODE / ZIP'
											key={2}
											dropLink={[]}
										/>,
									]}
								/>
							</div>
							<Button title='UPDATE TOTALS' />
						</div>
					</div>
					<div className='flex justify-between font-bold mb-[45px]'>
						<p>TOTAl</p>
						<p>{`$ ${allPrice + 15},00`}</p>
					</div>
					<Button title='PROCEED TO CHECKOUT' />
				</div>
			</div>
		</Section>
	)
}