'use client'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Section } from '../ui/Section'

export const Banner = () => {
	return (
		<Section>
			<div className='mt-[16px]'>
				<Swiper
					slideToClickedSlide
					className='rounded-[12px]'
					modules={[Pagination]}
					spaceBetween={20}
					pagination={{ clickable: true }}
				>
					{banners.map((i) => (
						<SwiperSlide key={i}>
							<div className='active:scale-[0.99] duration-200'>
								<div className='relative w-full h-[180px] sm:h-[300px] md:h-[350px] lg:h-[500px] xl:h-[646px]'>
									<Image
										className=''
										src={'/woman-banner.png'}
										fill
										alt='woman-banner'
									/>
								</div>
								<div className='flex flex-col justify-center ml-[39px] absolute top-0 size-full text-white'>
									<div className='mb-[18px] sm:mb-[48px]'>
										<h1 className='text-[18px] sm:text-[33px] sm:leading-[43px] font-medium'>
											Gold big hoops
										</h1>
										<p className='text-[18px] sm:text-[26px] font-normal sm:leading-[35px] mt-[4px] sm:mt-[16px]'>
											$ 68,00
										</p>
									</div>
									<div className='flex items-center justify-center w-[100px] sm:w-[193px] h-[42px] sm:h-[53px] rounded-[6px] border-[2px] border-white cursor-pointer hover:border-[#ececec] active:border-[#e2e2e2] duration-200'>
										<p className='text-[14px] sm:text-[20px] font-bold leading-[26px]'>
											View Product
										</p>
									</div>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</Section>
	)
}

const banners = [1, 2, 3, 4, 5]
