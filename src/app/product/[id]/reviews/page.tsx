'use client'
import { Section } from '@/components/ui/Section'
import { fetcher } from '@/utils/fetcher'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
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
import useSWR, { SWRResponse } from 'swr'

interface CommentType {
	user: {
		username: string
	}
	date: string
	feedback: string
}

export default function Product() {
	const path = usePathname()
	const nowPath = path.split('/')[2]

	// ПОЛУЧЕНИЕ REVIEWS ИЗ БД
	const { data, error, isLoading }: SWRResponse<any, any, any> = useSWR(
		{ url: `${process.env.BACK_PORT}review/${nowPath}` },
		fetcher
	)

	// ДЛЯ СИНХРОНИЗАЦИИ ДВУХ СЛАЙДЕРОВ
	const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null)

	return (
		<Section>
			<div className='flex flex-col lg:flex-row items-center lg:items-start lg:justify-between justify-normal'>
				{/* Главный слайдер и боковой для привью */}
				<div className='flex sm:gap-[20px] lg:gap-[15px] xl:gap-[25px] mb-[40px]'>
					<div className='hidden sm:block h-[400px] md:h-[450px] xl:h-[520px] w-[72px] md:w-[100px]'>
						<Swiper
							onSwiper={setThumbsSwiper}
							spaceBetween={10}
							slidesPerView={4}
							freeMode={true}
							watchSlidesProgress={true}
							modules={[FreeMode, Navigation, Thumbs]}
							wrapperClass='flex-col sm:gap-[40px] lg:gap-[39px]'
						>
							{productImg.map((img, i) => (
								<SwiperSlide key={i} className='rounded-[8px]'>
									<div className='relative size-[70px] md:size-[85px] lg:size-[85px] xl:size-[100px] rounded-[8px] overflow-hidden'>
										<Image src={img} fill alt='item' />
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
					<div className='w-[320px] sm:w-[400px] md:w-[460px] xl:w-[520px]'>
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
									<div className='relative w-full h-[360px] md:h-[460px] xl:h-[520px]'>
										<Image src={img} fill alt='item' />
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
				{/* КОММЕНТАРИИ */}
				<div className='flex flex-col lg:flex-row gap-[40px] lg:gap-[85px] mb-[75px] lg:mb-[120px] w-full md:w-[580px] lg:w-[360px] xl:w-[540px]'>
					{data?.length ? (
						<div className='w-full'>
							<div className=''>
								{data.map((comment: CommentType, i: number) => (
									<div
										key={i}
										className={` ${
											data.length > i + 1
												? 'pb-[39px] border-b-[1px] border-b-[#D8D8D8] mb-[24px]'
												: ''
										}`}
									>
										<div className='flex items-center gap-[16px] mb-[8px] lg:mb-[16px]'>
											<p className='text-[16px] lg:text-[20px]'>
												{comment.user.username}
											</p>
											<p className='text-[14px] text-[#707070]'>
												{comment.date.slice(0, 10)}
											</p>
										</div>
										<div className='flex gap-[10px] mb-[18px] lg:mb-[24px]'>
											{star.map((i) => (
												<FaStar
													key={i}
													className='size-[14px] lg:size-[18px] cursor-pointer text-[#000000]'
												/>
											))}
										</div>
										<p className='text-[16px] text-[#707070]'>
											{comment.feedback}
										</p>
									</div>
								))}
							</div>
						</div>
					) : (
						<div className='w-full lg:w-[580px]'>
							<p className='text-[18px] lg:text-[28px] text-center text-[#4d4d4d]'>
								There are no comments here yet...
							</p>
						</div>
					)}
				</div>
			</div>
		</Section>
	)
}
const star = [1, 2, 3, 4, 5]
const productImg = ['/Item1.png', '/Item2.png', '/Item3.png', '/Item4.png']
