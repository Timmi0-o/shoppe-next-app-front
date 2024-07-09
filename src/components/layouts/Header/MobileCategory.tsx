import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'

export const MobileCategory = () => {
	const path = usePathname()
	return (
		<div className={`mt-[16px] ${path !== '/' && 'hidden'}`}>
			<Swiper
				slideToClickedSlide
				className='rounded-[4px]'
				spaceBetween={8}
				breakpoints={{
					360: {
						slidesPerView: 2.1,
					},
					640: {
						slidesPerView: 3.2,
					},
					770: {
						slidesPerView: 4.5,
					},
				}}
			>
				{mobileCategory.map((category, i) => (
					<SwiperSlide key={i}>
						<div
							className='flex justify-center items-center w-[140px] h-[40px] border-[1px] border-[#D8D8D8] rounded-[4px]'
							key={i}
						>
							<Link href={category.link}>
								<p className='text-[12px] font-normal leading-[20px]'>
									{category.title}
								</p>
							</Link>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

const mobileCategory = [
	{ title: 'Earring', link: '#' },
	{ title: 'Necklace', link: '#' },
	{ title: 'Serge', link: '#' },
	{ title: 'Watch', link: '#' },
	{ title: 'Phone', link: '#' },
]
