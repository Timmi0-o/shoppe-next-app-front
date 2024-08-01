'use client'
import { useBasket } from '@/components/hooks/useBasket'
import { useProduct } from '@/components/hooks/useProduct'
import { useReview } from '@/components/hooks/useReview'
import { useUser } from '@/components/hooks/useUser'
import { Notification } from '@/components/layouts/Notification'
import { SimilarProducts } from '@/components/layouts/SimilarProducts'
import { Button } from '@/components/ui/Button'
import { Section } from '@/components/ui/Section'
import {
	addedProductInBasket,
	deletedProductInBasket,
} from '@/lib/reducers/Product'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { AiOutlineLoading } from 'react-icons/ai'
import { FaCheck, FaStar } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import SwiperCore from 'swiper'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import 'swiper/css/thumbs'
import { FreeMode, Navigation, Scrollbar, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { DropMenu } from '../DropMenu'
import { ProductLoading } from '../Loading/ProductLoading'
import { PostComment } from '../Review/PostComment'
import { Reviews } from '../Review/Reviews'

interface Product {
	title: string
	description: string
	price: number
	_id: string
	fullDescription: string
}

export const Product = () => {
	const dispatch = useDispatch()
	// USER
	const { user } = useUser()
	// GET REVIEWS DATA
	const { allReview } = useReview()
	// GET PRODUCT DATA
	const { product: productHook } = useProduct()
	// BASKET
	const { addProductInBasket, isAction, isBasked } = useBasket()
	console.log('isBasked', isBasked)

	const [qty, setQty] = useState<number | null>(null)
	const productInBasket = useSelector(
		(state: any) => state.product.productInBasket
	)

	useEffect(() => {
		if (isBasked) {
			isBasked.map((product) => {
				if (product.productId === productHook?._id) {
					setQty(product.qty)
					dispatch(addedProductInBasket())
				} else {
					setQty(null)
					dispatch(deletedProductInBasket())
					setProductNumber(1)
				}
			})
		} else {
			setQty(null)
			dispatch(deletedProductInBasket())
			setProductNumber(1)
		}
	}, [isBasked, productHook, dispatch])

	// Синхронизация двух слайдеров
	const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null)

	// КОЛИЧЕСТВО ВЫБРАННОГО ТОВАРА И НОМЕР ПОДРОБНОСТЕЙ
	const [productNumber, setProductNumber] = useState(1)
	const [productErrors, setProductErrors] = useState<JSX.Element | string>('')
	const [isSwitchesActive, setIsSwitchesActive] = useState(0)
	// КАЛИБРОВКА ЦЕНЫ ТОВАРА
	const [allPrice, setAllPrice] = useState(productHook?.price)

	useEffect(() => {
		setAllPrice(productHook?.price)
	}, [productHook])

	// button title
	const [btnTitle, setBtnTitle] = useState('ADD TO CART')

	// ADDED NEW ITEM TO BASKET
	const handleAddNewItemToBasket = async () => {
		if (!user) {
			setBtnTitle('ERROR!')
			setTimeout(() => {
				setBtnTitle('ADD TO CART')
			}, 2000)
			return setProductErrors(
				<p>
					Only registered users can add products to the cart,
					<Link href={'/account'}>
						<span className='text-black ml-[5px] underline'>log in!</span>
					</Link>
				</p>
			)
		} else {
			setBtnTitle('ADDED!')
		}
		try {
			if (productHook && !productErrors) {
				const response = await addProductInBasket(
					productHook._id,
					productNumber
				)
				if (response) {
					setProductNumber(1)
				}
			}
		} catch (error: any) {
			console.log(error.response?.data)
		}
	}

	// INITIAL PRICE PRODUCT
	useEffect(() => {
		if (productInBasket && qty) {
			setBtnTitle('IN THE BASKET')
		} else {
			setBtnTitle('ADD TO CART')
		}
	}, [productInBasket, qty])

	const switchesDescription = [
		'Description',
		'Aditional information',
		`Reviews(${allReview && allReview?.length})`,
	]

	return (
		<Section>
			{/* LOADING */}
			<div className={`${!productHook ? '' : 'hidden'} `}>
				<ProductLoading />
			</div>
			{/* PRODUCT  */}
			<div
				className={`pageLoadMove flex flex-col lg:flex-row gap-[20px] xl:gap-[62px] mb-[21px] lg:mb-[96px] duration-300 ease-in-out ${
					productHook ? '' : 'hidden'
				}`}
			>
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
							thumbs={{
								swiper:
									thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
							}}
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
							{productHook?.title}
						</p>
						<div className='flex items-center justify-between'>
							{/* ЦЕНА ТОВАРА И ВСПЛЫВАЮЩЕЕ СУММА ПРИ КОЛ-ВЕ БОЛЬШЕ 1ШТ */}
							<div className='flex items-center gap-[10px]'>
								<p className='text-[20px] text-[#A18A68] font-medium leading-[26px]'>
									$ {productHook?.price},00
								</p>
								<p
									className={`duration-150 origin-left ${
										(allPrice || 0) > (productHook?.price || 0)
											? 'opacity-100 scale-1'
											: 'opacity-0 scale-[0.7]'
									}`}
								>{`($ ${allPrice},00)`}</p>
							</div>
							<div className='lg:hidden flex justify-center items-center size-[24px] rounded-full'>
								<div className='relative buttonActive size-[14px]'>
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
							{allReview?.length} customer(s) review
						</p>
					</div>
					{/* PRODUCT META DATA && BUTTON PAY  */}
					<div className='flex flex-col-reverse lg:flex-col'>
						{/* ОПИСАНИЕ */}
						<div className='border-b-[1px] border-b-[#D8D8D8] pb-[14px] md:pb-0 md:border-none'>
							<p className='text-[12px] lg:text-[16px] text-[#707070] font-normal leading-[20px] lg:leading-[27px] mt-[16px] lg:mt-[20px] mb-[6px] lg:mb-0'>
								{productHook?.description}
							</p>
							<div className='flex md:hidden items-center gap-[5px] active:opacity-75 duration-200'>
								<p className='text-[12px] text-[#A18A68]'>View more</p>
								<div className='relative w-[8px] h-[14px] -rotate-90'>
									<Image src={'/drop-arrow.svg'} fill alt='drop-arrow' />
								</div>
							</div>
						</div>
						{/* КОПКА ДОБАВИТЬ В КОРЗИНУ И (ВЫБОРА КОЛ-ВА НА PC) */}
						<div className='relative flex mt-[25px] xl:mt-[49px]'>
							{/* CHOICE NUMBER PRODUCTS  */}
							<div
								className={`relative hidden lg:flex items-center justify-center duration-300 ease-in-out ${
									productInBasket && qty ? 'w-[53px]' : 'w-[102px]'
								} bg-[#EFEFEF] rounded-[4px] mr-[23px]`}
							>
								{/* ONCLICK LOAD  */}
								<div
									className={`absolute size-full flex items-center  z-30 justify-center bg-[#ffffff95] mt-[-6%] duration-300 delay-300 ${
										isAction && !productInBasket ? '' : 'hidden'
									}`}
								>
									<AiOutlineLoading className='size-[1vw] animate-spin' />
								</div>
								{/* -  */}
								<div
									onClick={() => {
										setProductNumber(
											productNumber > 1 ? productNumber - 1 : productNumber
										)
										setAllPrice(
											(allPrice || 0) > (productHook?.price || 0)
												? (allPrice || 0) - (productHook?.price || 0)
												: allPrice || 0
										)
									}}
									className={`p-[10px] border border-transparent active:border-[#00000034] cursor-pointer rounded-[4px] duration-300 ${
										productInBasket && qty ? 'hidden' : ''
									}`}
								>
									<div className='w-[9px] h-[1px] bg-[#707070]'></div>
								</div>
								{/* NUMBER  */}
								<div
									className={`flex justify-center items-center ${
										productInBasket && qty ? '' : 'px-[15px]'
									}  size-[24px]`}
								>
									<p className='text-[16px] text-[#707070] leading-[27px]'>
										{productInBasket && qty ? qty : productNumber}
									</p>
								</div>
								{/* +  */}
								<div
									onClick={() => {
										setProductNumber(productNumber + 1)
										setAllPrice(
											allPrice && productHook?.price
												? allPrice + productHook?.price
												: allPrice
										)
									}}
									className={`p-[10px] border border-transparent active:border-[#00000034] cursor-pointer rounded-[4px] duration-300 ${
										productInBasket && qty ? 'hidden' : ''
									}`}
								>
									<div className='flex justify-center items-center w-[9px] h-[1px] bg-[#707070] cursor-pointer'>
										<div className='w-[1px] h-[9px] bg-[#707070]'></div>
									</div>
								</div>
							</div>
							{/* BUTTON ADD TO BASKET & SHOW NOTIFICATION ON SUSSES */}
							<div className='flex justify-between w-full'>
								<div className={` duration-300 ease-in-out w-full`}>
									<Button
										noEffectText={productInBasket && qty ? true : false}
										disabled={productInBasket && qty ? true : false}
										onClick={() => handleAddNewItemToBasket()}
										title={btnTitle}
									>
										{productInBasket && qty ? (
											<div className='pl-[15px] '>
												<FaCheck />
											</div>
										) : (
											''
										)}
									</Button>
								</div>
								{/* BUTTON GO TO CARD  */}
								<div
									className={`w-[160px] pl-[10px] ${
										productInBasket && qty
											? ''
											: 'fixed ml-[100%] select-none opacity-0'
									}`}
								>
									<div
										className={`size-full duration-300 ease-in-out ${
											productInBasket && qty
												? ''
												: 'opacity-0 ml-[20px] scale-[0.95]'
										}`}
									>
										<Button href='/shopping-cart' title='View cart' />
									</div>
								</div>
								<Notification
									title='The item added to your Shopping bag.'
									noticeImg={'/success-shop.svg'}
									btnTitle='VIEW CART'
									isActive={isAction}
									href='/shopping-cart'
								/>
							</div>
							{/* PRODUCT ERRORS  */}
							<p
								className={`absolute bottom-[-40px] w-full text-center text-red-500 font-bold duration-300 ease-in-out ${
									productErrors ? '' : 'opacity-0 -z-20 ml-[60px] scale-[0.95]'
								}`}
							>
								{productErrors}
							</p>
						</div>
						{/* МЕТА ИНФА О ТОВАРЕ */}
						<div className='hidden lg:block mt-[40px] xl:mt-[80px]'>
							{/* Social Wishlist */}
							<div className='flex items-center h-[20px]'>
								{SocialWishlist.map((social, i) => (
									<div className='flex items-center mr-[24px]' key={i}>
										<div className='relative flex justify-center items-center size-[26px] buttonActive lg:hover:bg-[#f1f1f1] rounded-full'>
											<div className={`relative cursor-pointer ${social.size}`}>
												<Image src={social.src} fill alt='social-link' />
											</div>
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
			{/* ADDITIONAL PRODUCT DATA  */}
			<div className={`${allReview ? '' : 'hidden'}`}>
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
							{productHook?.fullDescription}
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
						{/* REVIEWS */}
						<div
							className={`flex duration-300 ${
								isSwitchesActive === 2
									? `h-fit overflow-y-auto opacity-100`
									: 'h-0 z-[-1] opacity-0'
							}`}
						>
							<Reviews />
							{/* POST COMMENT (PC ONLY) */}
							<div className='hidden lg:block'>
								<PostComment />
							</div>
						</div>
					</div>
				</div>
				{/* ОПИСАНИЕ, ДОП ИНФОРМАЦИЯ И ОТЗЫВЫ О ТОВАРЕ (ONLY MOBILE) */}
				<div className='flex flex-col gap-[9px] lg:hidden my-[16px] border-b-[1px] border-b-[#D8D8D8] pb-[15px]'>
					<DropMenu
						heightCustom='h-[200px]'
						title='Description'
						dropLink={productHook?.fullDescription}
					/>
					<DropMenu
						heightCustom='h-[175px]'
						title='Additional information'
						dropLink={productAdditionInfo}
					/>
					<DropMenu
						heightCustom={`${allReview?.length ? 'h-[500px]' : 'h-[75px]'}`}
						title={`Reviews(${allReview?.length})`}
						dropLink={<Reviews />}
					/>
				</div>
				{/* POST COMMENT (ONLY MOBILE) */}
				<div className='block lg:hidden'>
					<PostComment />
				</div>
			</div>
			{/* ПОХОЖИЕ ТОВАРЫ */}
			<SimilarProducts />
		</Section>
	)
}

const productImg = ['/Item1.png', '/Item2.png', '/Item3.png', '/Item4.png']
const productStars = [1, 2, 3, 4, 5]

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
