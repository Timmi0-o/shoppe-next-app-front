'use client'
import { Section } from '@/components/ui/Section'
import Image from 'next/image'
import { useState } from 'react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import 'swiper/css/thumbs'
import { FreeMode, Navigation, Scrollbar, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

function Product() {
	const [thumbsSwiper, setThumbsSwiper] = useState(null)
	return (
		<Section>
			<div className='flex flex-col lg:flex-row gap-[62px] mb-[21px] lg:mb-[96px]'>
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
								<div className='relative w-full h-[374px] xl:w-[540px] xl:h-[600px]'>
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

				<div>
					<p className='text-[26px] font-normal leading-[35px] mb-[23px]'>
						Lira Earrings
					</p>
					<p className='text-[20px] text-[#A18A68] font-medium leading-[26px]'>
						$ 20,00
					</p>
				</div>
			</div>
		</Section>
	)
}

export default Product
