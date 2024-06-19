'use client'
import { DropMenu } from '@/components/layouts/DropMenu'
import { Reviews } from '@/components/layouts/Reviews'
import { SimilarProducts } from '@/components/layouts/SimilarProducts'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
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

	// АНИМАЦИИ ДЛЯ НАЖАТОЙ КНОПКИ ПОКУПКИ ТОВАРА
	const [isAddedShop, setIsAddedShop] = useState(false)
	const [isBtnShopClick, setIsBtnShopClick] = useState('')
	const [btnTitle, setBtnTitle] = useState('ADD TO CART')

	// ФОРМА ДЛЯ ЗАПОЛНЕНИЯ КОММЕНТАРИЯ
	const [comment, setComment] = useState('')
	const [names, setNames] = useState('')
	const [email, setEmail] = useState('')

	const addProductShop = () => {
		setIsAddedShop(true)
		setBtnTitle('ADDED!')
		setIsBtnShopClick('tracking-[2px] duration-300 ')

		setTimeout(() => {
			setIsBtnShopClick('tracking-[0px] duration-300')
		}, 200)

		setTimeout(() => {
			setIsBtnShopClick('')
		}, 500)

		setTimeout(() => {
			setIsAddedShop(false)
			setBtnTitle('ADD TO CART')
		}, 3500)
	}

	return (
		<Section>
			<div className='flex flex-col lg:flex-row gap-[20px] xl:gap-[62px] mb-[21px] lg:mb-[96px]'>
				{/* Главный слайдер и боковой для привью */}
				<div className='flex md:gap-[40px] lg:gap-[15px] xl:gap-[39px]'>
					<div className='hidden md:block md:h-[540px] xl:h-[600px] w-[120px]'>
						<Swiper
							onSwiper={setThumbsSwiper}
							spaceBetween={10}
							slidesPerView={4}
							freeMode={true}
							watchSlidesProgress={true}
							modules={[FreeMode, Navigation, Thumbs]}
							wrapperClass='flex-col md:gap-[20px] lg:gap-[39px]'
						>
							{productImg.map((img, i) => (
								<SwiperSlide key={i} className='rounded-[8px]'>
									<div className='relative size-[120px] lg:size-[105px] xl:size-[120px] rounded-[8px] overflow-hidden'>
										<Image src={img} fill alt='item' />
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
					<div className='w-full md:w-[500px] xl:w-[540px]'>
						<Swiper
							spaceBetween={10}
							slidesPerView={1}
							thumbs={{ swiper: thumbsSwiper }}
							modules={[FreeMode, Thumbs, Scrollbar]}
							scrollbar={true}
							centeredSlides
						>
							{productImg.map((img, i) => (
								<SwiperSlide key={i}>
									<div className='relative w-full h-[374px] sm:h-[550px] md:w-[500px] md:h-[540px] xl:w-[540px] xl:h-[600px]'>
										<Image src={img} fill alt='item' />
									</div>
								</SwiperSlide>
							))}
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
					<div className='hidden lg:flex items-center gap-[24px] mt-[30px] xl:mt-[64px]'>
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
							<div className='flex md:hidden items-center gap-[5px] active:opacity-75 duration-200'>
								<p className='text-[12px] text-[#A18A68]'>View more</p>
								<div className='relative w-[8px] h-[14px] -rotate-90'>
									<Image src={'/drop-arrow.svg'} fill alt='drop-arrow' />
								</div>
							</div>
						</div>
						{/* КОПКА ДОБАВИТЬ В КОРЗИНУ И (ВЫБОРА КОЛ-ВА НА PC) */}
						<div className='flex mt-[25px] xl:mt-[49px]'>
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
							{/* ДОБАВИТЬ ТОВАР В КОРЗИНУ И ОТОБРАЗИТЬ ВСПЛЫВАЮЩЕЕ ОКНО */}
							<div className='w-full'>
								<Button
									onClick={() => addProductShop()}
									title={btnTitle}
									AddTitleClass={isBtnShopClick}
								/>
								<div
									className={`flex items-center justify-between fixed lg:absolute z-20 bottom-0 lg:top-[-100px] h-[68px] bg-[#EFEFEF] px-[5px] sm:px-[16px] lg:px-[40px] duration-300 ease-in-out w-full ${
										isAddedShop
											? 'opacity-100 left-0 lg:mt-0'
											: 'opacity-0 z-[-1] left-[-30%]'
									}`}
								>
									<div className='flex gap-[16px] items-center'>
										<div className='relative size-[20px]'>
											<Image
												src={'/success-shop.svg'}
												fill
												alt='success-shop'
											/>
										</div>
										<p className='text-[14px] md:text-[16px] leading-[27px] font-normal'>
											The item added to your Shopping bag.
										</p>
									</div>
									<p className='text-[14px] md:text-[16px]  text-[#A18A68] cursor-pointer'>
										VIEW CART
									</p>
								</div>
							</div>
						</div>
						{/* МЕТА ИНФА О ТОВАРЕ */}
						<div className='hidden lg:block mt-[40px] xl:mt-[80px]'>
							{/* Social Wishlist */}
							<div className='flex items-center h-[20px]'>
								{SocialWishlist.map((social, i) => (
									<div className='flex items-center mr-[24px]' key={i}>
										<div className={`relative cursor-pointer ${social.size}`}>
											<Image src={social.src} fill alt='social-link' />
										</div>
										{i === 0 && (
											<div className='w-[1px] h-[20px] bg-[#D8D8D8] ml-[40px] mr-[16px]'></div>
										)}
									</div>
								))}
							</div>
							{/* SKU И КАТЕГОРИИ */}
							<div className='mt-[25px] xl:mt-[37px]'>
								<div className='flex gap-[16px] text-[16px] leading-[27px]'>
									<p>SKU:</p>
									<p className='text-[#707070]'>12</p>
								</div>
								<div className='flex gap-[16px] text-[16px] leading-[27px]'>
									<p>Categories:</p>
									<p className='text-[#707070]'>Fashion, Style</p>
								</div>
							</div>
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

			{/* ОПИСАНИЕ, ДОП ИНФОРМАЦИЯ И ОТЗЫВЫ О ТОВАРЕ (ONLY MOBILE) */}
			<div className='flex flex-col gap-[9px] lg:hidden my-[16px] border-b-[1px] border-b-[#D8D8D8] pb-[15px]'>
				<DropMenu
					heightCustom='h-[270px]'
					title='Description'
					dropLink={productDescription}
				/>
				<DropMenu
					title='Additional information'
					dropLink={productAdditionInfo}
				/>
				<DropMenu
					heightCustom='h-fit'
					title='Reviews(0)'
					dropLink={<Reviews />}
				/>
			</div>
			{/* ОСТАВИТЬ СВОЙ ОТЗЫВ (ONLY MOBILE) */}
			<div className='block lg:hidden w-full'>
				<p className='text-[20px] leading-[26px] mb-[5px]'>Add a Review</p>
				<p className='text-[13px] text-[#707070] leading-[20px] mb-[26px]'>
					Your email address will not be published. Required fields are marked *
				</p>
				<p className='text-[14px] text-[#707070] leading-[22px]'>
					Your Review*
				</p>
				<div className='flex flex-col gap-[26px] mb-[24px]'>
					<Input state={comment} setState={setComment} />
					<Input
						state={names}
						setState={setNames}
						placeholder='Enter your name*'
					/>
					<Input
						state={email}
						setState={setEmail}
						placeholder='Enter your Email*'
						type='email'
					/>
				</div>
				<div className='flex gap-[8px] cursor-pointer'>
					<div className='size-[18px] border-[1px] border-black'></div>
					<p className='w-[250px] text-[12px] text-[#707070] mb-[26px]'>
						Save my name, email, and website in this browser for the next time I
						comment
					</p>
				</div>
				<p className='text-[14px] text-[#707070] mb-[13px]'>Your Rating*</p>
				<div className='flex gap-[10px] mb-[28px]'>
					{star.map((i) => (
						<FaStar key={i} className='size-[18px] cursor-pointer' />
					))}
				</div>
				<div className='w-full mb-[28px]'>
					<Button title='Submit' />
				</div>
			</div>
			<SimilarProducts />
		</Section>
	)
}

export default Product

const productImg = ['/Item1.png', '/Item2.png', '/Item3.png', '/Item4.png']
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
		<div className='flex gap-[10px] text-[13px] lg:text-[16px]'>
			<p className='text-black font-normal'>Weight:</p>
			<p className='text-[#707070]'>0.3 kg</p>
		</div>
		<div className='flex gap-[10px] text-[13px] lg:text-[16px]'>
			<p className='text-black font-normal'>Dimentions:</p>
			<p className='text-[#707070]'>15 x 10 x 1 cm</p>
		</div>
		<div className='flex gap-[10px] text-[13px] lg:text-[16px]'>
			<p className='text-black font-normal'>Colours:</p>
			<p className='text-[#707070]'>Black, Browns, White</p>
		</div>
		<div className='flex gap-[10px] text-[13px] lg:text-[16px]'>
			<p className='text-black font-normal'>Material:</p>
			<p className='text-[#707070]'>Metal</p>
		</div>
	</div>,
]

const SocialWishlist = [
	{ src: '/like-product.svg', size: 'w-[20px] h-[18px]' },
	{ src: '/email.svg', size: 'w-[21px] h-[16px]' },
	{ src: '/facebook.svg', size: 'w-[10px] h-[17px]' },
	{ src: '/instagram.svg', size: 'w-[18px] h-[18px]' },
	{ src: '/x.svg', size: 'w-[20px] h-[16px]' },
]

const star = [1, 2, 3, 4, 5]
