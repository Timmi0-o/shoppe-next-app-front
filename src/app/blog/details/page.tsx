'use client'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Rights } from '@/components/ui/Rights'
import { Section } from '@/components/ui/Section'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function Details() {
	const [searchBlog, setSearchBlog] = useState('')
	const [rights, setRights] = useState(false)
	const [comment, setComment] = useState('')
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [website, setWebsite] = useState('')

	return (
		<Section>
			{/* SIDEBAR  */}
			<div className='flex justify-center gap-[39px] mt-[39px] lg:mt-[36px]'>
				<div className='hidden lg:block'>
					<div className='flex justify-between items-center w-[261px] pb-[11px] border-b-[1px] border-b-[#D8D8D8]'>
						<input
							className='w-full outline-none bg-transparent placeholder:text-[#707070] text-[14px] font-normal leading-[22px] text-black'
							onChange={(e) => setSearchBlog(e.target.value)}
							type='text'
							value={searchBlog}
							placeholder='Search...'
						/>
						<div className='relative w-[19px] h-[19px]'>
							<Image src={'/search.svg'} fill alt='search' />
						</div>
					</div>
					<div className='mt-[62px]'>
						<p className='text-[20px] mb-[22px]'>Categories</p>
						<div className='flex flex-col gap-[10px]'>
							{categories.map((category, i) => (
								<Link href={category.link} key={i}>
									<p className='text-[16px] duration-300 ease-in-out text-[#707070] active:bg-[#d9d9d9] lg:active:bg-transparent lg:hover:ml-[10px] w-fit px-[5px] py-[2px] rounded-[4px]'>
										{category.title}
									</p>
								</Link>
							))}
						</div>
					</div>
				</div>
				{/* ИНФОРМАЦИЯ БЛОГА */}
				<div className='flex flex-col w-full md:w-[450px] lg:w-[660px] xl:w-[950px]'>
					{/* ДАННЫЕ БЛОКА */}
					<div className='flex flex-col items-center w-full mb-[24px] lg:mb-[39px]'>
						<p className='hidden lg:block text-[33px] text-center mb-[16px]'>
							Fast Fashion, And Faster Fashion
						</p>
						<p className='block lg:hidden text-[20px] text-center mb-[10px]'>
							Fast Fashion, And Faster <br /> Fashion
						</p>
						<div className='flex gap-[4px] text-[12px] lg:text-[16px] text-[#707070]'>
							by <p className='text-black'>ANNY JOHNSON</p> - October 8,2020
						</div>
					</div>
					{/* SLIDER */}
					<div className='w-full mb-[16px] lg:mb-[64px]'>
						<Swiper
							slideToClickedSlide
							slidesPerView={1}
							className='rounded-[12px]'
							modules={[Pagination]}
							spaceBetween={20}
							pagination={{ clickable: true }}
						>
							{sliders.map((i) => (
								<SwiperSlide key={i}>
									<div
										className='relative flex justify-center items-center w-full h-[192px] lg:h-[350px] xl:h-[490px] rounded-[4px]'
										key={i}
									>
										<Image
											src={'/blog-details-big.png'}
											fill
											alt='blog-details-big'
										/>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
					{/* ОПИСАНИЕ И ДОП ФОТО */}
					<div className='flex flex-col gap-[20px] text-[12px] lg:text-[16px] w-full lg:w-[670px] mx-auto'>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
							placerat, augue a volutpat hendrerit, sapien tortor faucibus
							augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu
							facilisis consequat sed eu felis. Nunc sed porta augue.
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
							placerat, augue a volutpat hendrerit, sapien tortor faucibus
							augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu
							facilisis consequat sed eu felis.
						</p>
						<div className='relative w-full h-[192px] lg:h-[300px] mt-[24px] lg:mt-[58px]'>
							<Image src={'/blog-details.png'} fill alt='blog-details' />
						</div>
						<div>
							<p className='text-[16px] lg:text-[26px] mb-[13px] lg:mb-[24px]'>
								Top trends
							</p>
							<p className='text-[12px] lg:text-[16px]'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
								placerat, augue a volutpat hendrerit, sapien tortor faucibus
								augue, a maximus elit ex vitae libero.
							</p>
							<div className='mt-[16px] ml-[16px]'>
								{trends.map((trend, i) => (
									<div className='flex items-center gap-[5px]' key={i}>
										<div className='size-[9px] rounded-full bg-black'></div>
										<p className='text-[12px] lg:text-[16px]'>{trend}</p>
									</div>
								))}
							</div>
							<div className='flex flex-col lg:flex-row gap-[34px] lg:gap-0 justify-between mt-[46px] lg:mt-[91px] w-full'>
								<div className='flex items-center gap-[8px]'>
									<p className='text-[12px] lg:text-[16px]'>Tags</p>
									<div className='w-[64px] h-[1px] bg-black'></div>
									<p className='text-[12px] lg:text-[16px] text-[#707070]'>
										Fashion, Style, Season
									</p>
								</div>
								<div className='flex items-center gap-[8px]'>
									<p className='text-[12px] lg:text-[16px]'>Share</p>
									<div className='w-[64px] h-[1px] bg-black'></div>
									<div className='flex gap-[24px]'>
										{shareImg.map((img, i) => (
											<div
												className={`relative buttonActive ${img.size}`}
												key={i}
											>
												<Image src={img.img} fill alt={img.title} />
											</div>
										))}
									</div>
								</div>
							</div>
							<div className='w-full h-[1px] bg-[#D8D8D8] my-[35px] lg:my-[44px]'></div>
							{/* ОСТАВИТЬ КОММЕНТ ПОД БЛОГОМ */}
							<div>
								<p className='text-[16px] lg:text-[26px] mb-[13px] lg:mb-[16px]'>
									Leave a reply
								</p>
								<p className='text-[12px] lg:text-[14px] text-[#707070]'>
									Your email address will not be published. Required fields are
									marked *
								</p>
								<div className='flex flex-col gap-[38px] lg:gap-[50px] mt-[56px] lg:mt-[74px]'>
									<Input
										state={name}
										setState={setName}
										placeholder='Enter your name*'
									/>
									<Input
										state={email}
										setState={setEmail}
										placeholder='Enter your Email*'
									/>
									<Input
										state={website}
										setState={setWebsite}
										placeholder='Enter your Website'
									/>
								</div>
								<div className='mt-[39px] lg:mt-[24px]'>
									<Rights
										rightsState={rights}
										rightsSetState={setRights}
										rightsText='Save my name, email, and website in this browser for the next time I comment'
									/>
								</div>
								<p className='text-[14px] text-[#707070] mb-[25px]'>
									Your Comment*
								</p>
								<Input state={comment} setState={setComment} />
								<div className='w-[158px] lg:w-[197px] my-[48px] lg:my-[64px]'>
									<Button
										heightCustom='h-[48px] sm:h-[48px] lg:h-[53px]'
										title='POST COMMENT'
									/>
								</div>
								{/* COMMENTS */}
								<div className='flex items-center flex-col mb-[96px] lg:mb-[210px]'>
									<p className='text-[16px] lg:text-[26px] mb-[53px] lg:mb-[42px] text-left w-full'>
										Comments(3)
									</p>
									{comments.map((comment, i) => (
										<div className={`relative mb-[48px]`} key={i}>
											<div
												className={`${
													comment.reply
														? 'absolute w-full h-[1px] bg-[#D8D8D8] bottom-[-24px] left-0'
														: ''
												}`}
											></div>
											<div
												className={`flex justify-between ${
													comment.reply
														? 'items-start pl-[78px]'
														: 'items-center'
												}`}
											>
												<div className='relative size-[70px] mr-[24px]'>
													<Image src={comment.img} fill alt='user1' />
												</div>
												<div
													className={`${
														comment.reply
															? ' max-w-[132px] lg:max-w-[482px]'
															: 'max-w-[210px] lg:max-w-[576px]'
													}`}
												>
													<div
														className={`flex items-start ${
															comment.reply
																? 'flex-col md:flex-row gap-[8px]'
																: 'flex-row'
														} lg:items-center justify-between mb-[16px]`}
													>
														<div className='flex flex-col lg:flex-row gap-[8px] items-center lg:gap-[16px]'>
															<p className='text-left lg:text-balance text-[12px] lg:text-[20px] w-full lg:w-fit'>
																{comment.user}
															</p>
															<p className='text-[12px] lg:text-[14px]'>
																{comment.date}
															</p>
														</div>
														<div className='flex items-center gap-[8px]'>
															<div className='relative w-[16px] h-[14px]'>
																<Image src={'/reply.svg'} fill alt='reply' />
															</div>
															<p className='text-[12px] lg:text-[13px] text-[#707070]'>
																Reply
															</p>
														</div>
													</div>
													<p className='text-[12px] lg:text-[16px] text-[#707070]'>
														{comment.comment}
													</p>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Section>
	)
}

const categories = [
	{ title: 'Fashion', link: '' },
	{ title: 'Style', link: '' },
	{ title: 'Accessories', link: '' },
	{ title: 'Season', link: '' },
]

const sliders = [1, 2, 3, 4, 5]

const trends = [
	'consectetur adipiscing elit. Aliquam placerat',
	'Lorem ipsum dolor sit amet consectetur',
	'sapien tortor faucibus augue',
	'a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis',
]

const shareImg = [
	{
		title: 'facebook',
		img: '/facebook.svg',
		href: '#',
		size: 'w-[7px] h-[12px] sm:w-[10px] sm:h-[18px]',
	},
	{
		title: 'instagram',
		img: '/instagram.svg',
		href: '#',
		size: 'size-[12px] sm:w-[18px] sm:h-[18px]',
	},
	{
		title: 'x',
		img: '/x.svg',
		href: '#',
		size: 'w-[14px] h-[12px] sm:w-[20px] sm:h-[17px]',
	},
]

const comments = [
	{
		user: 'Scarlet withch',
		date: '6 May, 2020',
		img: '/user1.png',
		comment:
			'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. ',
		reply: false,
	},
	{
		user: 'Kate moss',
		date: '6 May, 2020',
		img: '/user2.png',
		comment:
			'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. ',
		reply: true,
	},
	{
		user: 'Scarlet withch',
		date: '6 May, 2020',
		img: '/user1.png',
		comment:
			'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. ',
		reply: false,
	},
]
