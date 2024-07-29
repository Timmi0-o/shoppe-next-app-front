import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react'
import { IoClose } from 'react-icons/io5'
import { FreeMode, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

interface ProductPreviewPCProps {
	productImg: string[]
	isShow: boolean
	setIsShow: Dispatch<SetStateAction<boolean>>
}

export const ProductPreviewPcModal = ({
	productImg,
	isShow,
	setIsShow,
}: ProductPreviewPCProps) => {
	const handleClosePreviewModal = (e: any) => {
		e.preventDefault()
		setIsShow(false)
		document.body.style.overflowY = ''
		document.body.style.paddingRight = ''
	}
	return (
		<div
			onClick={(e: any) => handleClosePreviewModal(e)}
			className={`fixed top-0 left-0 flex items-center justify-center size-[100%] duration-300 ${
				isShow ? 'z-10 bg-[#00000075]' : '-z-10 opacity-0'
			}`}
		>
			<div
				className={`w-[70%] relative duration-300 ${
					isShow ? 'delay-75' : 'mt-[40px]'
				}`}
			>
				<IoClose
					color='white'
					className='absolute right-[-60px] top-0 z-10 size-[32px] hover:rotate-[130deg] duration-300 ease-out'
					onClick={(e: any) => handleClosePreviewModal(e)}
				/>
				<div className='w-full'>
					<Swiper
						// spaceBetween={20}
						modules={[FreeMode, Pagination]}
						centeredSlides
						pagination={{ clickable: true }}
						className='rounded-[12px]'
						breakpoints={{
							1024: {
								slidesPerView: 1.4,
							},
							1280: {
								slidesPerView: 1.6,
							},
							1536: {
								slidesPerView: 1.8,
							},
						}}
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
		</div>
	)
}
