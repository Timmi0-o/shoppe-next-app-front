'use client'
import { DropMenuMobile } from '@/components/layouts/DropMenuMobile'
import { Reviews } from '@/components/layouts/Reviews'
import { SimilarProducts } from '@/components/layouts/SimilarProducts'
import { Button } from '@/components/ui/Button'
import { Section } from '@/components/ui/Section'
import Image from 'next/image'
import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import SwiperCore from 'swiper'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import 'swiper/css/thumbs'
import { FreeMode, Navigation, Scrollbar, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

function Product() {
	const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null)

	const [productNumber, setProductNumber] = useState(1)

	const [isSwitchesActive, setIsSwitchesActive] = useState(0)

	const [allPrice, setAllPrice] = useState(20)
	return (
		<Section>
			<div className='flex flex-col lg:flex-row gap-[40px] lg:gap-[62px] mb-[21px] lg:mb-[96px]'>
				{/* Главный слайдер и боковой для привью */}
				<div className='flex gap-[39px]'>
					<div className='hidden lg:block h-[600px] w-[120px]'>
						<Swiper
							onSwiper={setThumbsSwiper}
							spaceBetween={10}
							slidesPerView={4}
							freeMode={true}
							watchSlidesProgress={true}
							modules={[FreeMode, Navigation, Thumbs]}
							wrapperClass='flex-col gap-[39px]'
						>
							<SwiperSlide className='rounded-[8px]'>
								<div className='relative size-[120px] rounded-[8px] overflow-hidden'>
									<Image src={'/Item1.png'} fill alt='item' />
								</div>
							</SwiperSlide>
							<SwiperSlide className='rounded-[8px]'>
								<div className='relative size-[120px] rounded-[8px] overflow-hidden'>
									<Image src={'/Item2.png'} fill alt='item' />
								</div>
							</SwiperSlide>
							<SwiperSlide className='rounded-[8px]'>
								<div className='relative size-[120px] rounded-[8px] overflow-hidden'>
									<Image src={'/Item3.png'} fill alt='item' />
								</div>
							</SwiperSlide>
							<SwiperSlide className='rounded-[8px]'>
								<div className='relative size-[120px] rounded-[8px] overflow-hidden'>
									<Image src={'/Item4.png'} fill alt='item' />
								</div>
							</SwiperSlide>
						</Swiper>
					</div>
					<div className='w-full lg:w-[540px]'>
						<Swiper
							spaceBetween={10}
							slidesPerView={1}
							thumbs={{ swiper: thumbsSwiper }}
							modules={[FreeMode, Thumbs, Scrollbar]}
							scrollbar={true}
							centeredSlides
						>
							<SwiperSlide>
								<div className='relative w-full h-[374px] lg:w-[500px] lg:h-[540px] xl:w-[540px] xl:h-[600px]'>
									<Image src={'/Item1.png'} fill alt='item' />
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className='relative w-full h-[374px] xl:w-[540px] xl:h-[600px]'>
									<Image src={'/Item2.png'} fill alt='item' />
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className='relative w-full h-[374px] xl:w-[540px] xl:h-[600px]'>
									<Image src={'/Item3.png'} fill alt='item' />
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className='relative w-full h-[374px] xl:w-[540px] xl:h-[600px]'>
									<Image src={'/Item4.png'} fill alt='item' />
								</div>
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
				{/* О ТОВАРЕ */}
				<div>
					{/* НАЗВАНИЕ ТОВАРА И ПРАЙС */}
					<div>
						<p className='text-[26px] font-normal leading-[35px] mb-[5px] lg:mb-[23px]'>
							Lira Earrings
						</p>
						<div className='flex items-center justify-between'>
							<div className='flex gap-[10px]'>
								<p className='text-[20px] text-[#A18A68] font-medium leading-[26px]'>
									$ 20,00
								</p>
								<p
									className={`text-[12] duration-200 origin-left ${
										allPrice > 20 ? 'opacity-100 scale-1' : 'opacity-0 scale-0'
									}`}
								>{`($ ${allPrice},00)`}</p>
							</div>
							<div className='lg:hidden flex justify-center items-center size-[24px] active:bg-[#d9d9d9] duration-200 rounded-full'>
								<div className='relative size-[14px]'>
									<Image src={'/share.svg'} fill alt='share' />
								</div>
							</div>
						</div>
					</div>
					{/* ОЦЕНКА ТОВАРА */}
					<div className='hidden lg:flex items-center gap-[24px] mt-[64px]'>
						<div className='flex gap-[10px]'>
							{productStars.map((i) => (
								<FaStar
									key={i}
									className='size-[18px] cursor-pointer text-[#000000]'
								/>
							))}
						</div>
						<p className='text-[16px] text-[#707070] font-normal leading-[27px]'>
							1 customer review
						</p>
					</div>
					<div className='flex flex-col-reverse lg:flex-col'>
						{/* ОПИСАНИЕ */}
						<div className='border-b-[1px] border-b-[#D8D8D8] pb-[14px] md:pb-0 md:border-none'>
							<p className='text-[12px] lg:text-[16px] text-[#707070] font-normal leading-[20px] lg:leading-[27px] mt-[16px] lg:mt-[20px] mb-[6px] lg:mb-0'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
								placerat, augue a volutpat hendrerit, sapien tortor faucibus
								augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu
								facilisis consequat sed eu felis.
							</p>
							<div className='flex items-center gap-[5px] active:opacity-75 duration-200'>
								<p className='text-[12px] text-[#A18A68]'>View more</p>
								<div className='relative w-[8px] h-[14px] -rotate-90'>
									<Image src={'/drop-arrow.svg'} fill alt='drop-arrow' />
								</div>
							</div>
						</div>
						{/* КОПКА ДОБАВИТЬ В КОРЗИНУ И (ВЫБОРА КОЛ-ВА НА PC) */}
						<div className='flex mt-[24px] lg:mt-[49px]'>
							<div className='hidden lg:flex items-center justify-center w-[102px] h-[53px] bg-[#EFEFEF] rounded-[4px] mr-[23px]'>
								<div
									onClick={() => {
										setProductNumber(
											productNumber > 1 ? productNumber - 1 : productNumber
										)
										setAllPrice(allPrice >= 20 ? allPrice - 20 : 0)
									}}
									className='p-[10px] border border-transparent active:border-[#00000034] cursor-pointer rounded-[4px] duration-300'
								>
									<div className='w-[9px] h-[1px] bg-[#707070]'></div>
								</div>
								<div className='flex justify-center items-center px-[15p] size-[24px]'>
									<p className='text-[16px] text-[#707070] leading-[27px]'>
										{productNumber}
									</p>
								</div>
								<div
									onClick={() => {
										setProductNumber(productNumber + 1)
										setAllPrice(allPrice + 20)
									}}
									className='p-[10px] border border-transparent active:border-[#00000034] cursor-pointer rounded-[4px] duration-300'
								>
									<div className='flex justify-center items-center w-[9px] h-[1px] bg-[#707070] cursor-pointer'>
										<div className='w-[1px] h-[9px] bg-[#707070]'></div>
									</div>
								</div>
							</div>
							<Button title='ADD TO CART' />
						</div>
					</div>
				</div>
			</div>
			{/* ОПИСАНИЕ, ДОП ИНФОРМАЦИЯ И ОТЗЫВЫ О ТОВАРЕ (ONLY PC) */}
			<div className='hidden lg:block mb-[96px]'>
				{/* SWITCHES */}
				<div className='flex gap-[64px] items-center border-b-[1px] border-b-[#D8D8D8] pb-[34px] mb-[39px]'>
					{switchesDescription.map((switches, i) => (
						<p
							onClick={() => setIsSwitchesActive(i)}
							className={`relative text-[20px] font-normal cursor-pointer duration-200 before:w-full before:absolute before:h-[2px] before:left-0 before:top-[60px] before:bg-[#000000] before:px-[2px] before:ease-out leading-[27px] before:origin-left ${
								isSwitchesActive === i
									? 'text-black before:scale-x-[1] before:duration-300'
									: 'before:scale-x-[0] text-[#707070] before:duration-300'
							}`}
							key={i}
						>
							{switches}
						</p>
					))}
				</div>
				<div>
					<p
						className={`text-[12px] lg:text-[16px] text-[#707070] leading-[27px] font-normal ${
							isSwitchesActive === 0
								? 'h-[100px] opacity-100'
								: 'h-0 z-[-1] opacity-0'
						} duration-300`}
					>
						{productDescription}
					</p>
					<div
						className={`flex flex-col gap-[20px] text-[12px] lg:text-[16px] text-[#707070] leading-[27px] font-normal duration-300 ${
							isSwitchesActive === 1
								? 'h-[120px] opacity-100'
								: 'h-0 z-[-1] opacity-0'
						}`}
					>
						{productAdditionInfo}
					</div>
					{/* ОТЗЫВЫ */}
					<div
						className={`${
							isSwitchesActive === 2
								? 'h-[610px] overflow-y-auto opacity-100'
								: 'h-0 z-[-1] opacity-0'
						}`}
					>
						<Reviews />
					</div>
				</div>
			</div>
			<div className='flex flex-col gap-[9px] lg:hidden my-[16px] border-b-[1px] border-b-[#D8D8D8] pb-[15px]'>
				<DropMenuMobile title='Description' dropLink={productDescription} />
				<DropMenuMobile
					title='Additional information'
					dropLink={productAdditionInfo}
				/>
				{/* <DropMenuMobile title='Reviews(0)' dropLink={} /> */}
			</div>
			<SimilarProducts />
		</Section>
	)
}

export default Product
const productStars = [1, 2, 3, 4, 5]

const switchesDescription = [
	'Description',
	'Aditional information',
	'Reviews(0)',
]

const productDescription = [
	'Gold rings are not just jewelry, but symbols of luxury, eternal love, and cultural heritage. For centuries, these exquisite items have played an important role in various cultures and civilizations, from ancient Egyptians to modern celebrities. Each gold ring is not only a piece of jewelry but also a story of craftsmanship, history, and meaning. Gold rings first appeared in ancient civilizations such as Egypt and Mesopotamia, where they served not only as adornments but also as symbols of power and wealth.',
]

const productAdditionInfo = [
	<div className='flex flex-col gap-[10px]' key={1}>
		<div className='flex gap-[10px] text-[16px]'>
			<p className='text-black font-normal'>Weight:</p>
			<p className='text-[#707070]'>0.3 kg</p>
		</div>
		<div className='flex gap-[10px] text-[16px]'>
			<p className='text-black font-normal'>Dimentions:</p>
			<p className='text-[#707070]'>15 x 10 x 1 cm</p>
		</div>
		<div className='flex gap-[10px] text-[16px]'>
			<p className='text-black font-normal'>Colours:</p>
			<p className='text-[#707070]'>Black, Browns, White</p>
		</div>
		<div className='flex gap-[10px] text-[16px]'>
			<p className='text-black font-normal'>Material:</p>
			<p className='text-[#707070]'>Metal</p>
		</div>
	</div>,
]
