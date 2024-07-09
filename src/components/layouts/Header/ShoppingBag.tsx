import { Button } from '@/components/ui/Button'
import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react'
import { IoCloseOutline } from 'react-icons/io5'

interface ShoppingBagProps {
	isShoppingBagShop: boolean
	setIsShoppingBagShop: Dispatch<SetStateAction<boolean>>
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
	return (
		<div
			className={`flex justify-center fixed right-0 top-0 w-full lg:w-[400px] min-h-[100vh] border-[1px] border-[#D8D8D8] duration-500 ease-in-out z-10 bg-white shadow-[#838383] ${
				isShoppingBagShop ? 'opacity-100 translate-x-0' : 'right-[-100vw]'
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
				{/* КАРТОЧКИ С ТОВАРАМИ И КНОПКОЙ ПОКУПКИ */}
				<div className={` duration-300 ${testItems ? 'mt-0' : 'mt-[100%]'}`}>
					<p className='text-[#707070] text-[14px] mb-[3px]'>
						{testItems.length} items
					</p>
					<div className='shoppingBagItems flex justify-between flex-col  overflow-y-scroll h-[74vh] md:h-[76vh] lg:h-[80vh] xl:h-[72vh]'>
						{testItems.map((_, i) => (
							<div
								key={i}
								className={`flex gap-[20px] ${
									i + 1 === testItems.length ? 'pb-[44px]' : 'pb-[22px] '
								}`}
							>
								<div className='flex gap-[8px] w-[290px] h-[136px]'>
									<div className='relative size-[136px] cursor-pointer'>
										<Image src={'/Item1.png'} fill alt='Item' />
									</div>
									<div className='flex flex-col justify-between text-[14px]'>
										<div>
											<p>Lira Earrings</p>
											<p className='text-[#707070]'>Black / Medium</p>
											<p className='text-[#707070]'>$ 20,00</p>
										</div>
										<p>QTY: - 1 +</p>
									</div>
								</div>
								<div className='flex justify-center items-center size-[18px] active:bg-[#D8D8D8] lg:hover:bg-[#D8D8D8] rounded-full duration-300'>
									<IoCloseOutline
										color='black'
										className='size-[18px] cursor-pointer'
									/>
								</div>
							</div>
						))}
					</div>
					<div className='absolute bottom-[16vh] left-0 w-full h-[1px] bg-[#D8D8D8] z-10'></div>
					{/* КОЛ-ВО, СУММА И КНОПКА ПОСМОТРЕТЬ СПИСОК */}
					<div className='w-[80%] absolute bottom-[3vh] bg-white pt-[3vh] lg:pt-[3vh] xl:pt-[1.8vh]'>
						<div className='flex justify-between items-center text-[1.8vh] xl:text-[2.1vh] mb-[21px]'>
							<p>Subtotal ({testItems.length} items)</p>
							<p>$ 240,00</p>
						</div>
						<Button
							onClick={() => setIsShoppingBagShop(false)}
							href='/shopping-cart'
							removeSize
							className='h-[5.6vh]'
							titleSize='text-[1.7vh]'
							title='VIEW CART'
						/>
					</div>
				</div>
				<p
					className={`text-[32px] text-center duration-300 ${
						testItems ? 'ml-[100%] absolute' : 'mt-0'
					}`}
				>
					The basket is empty
				</p>
			</div>
		</div>
	)
}

const testItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
