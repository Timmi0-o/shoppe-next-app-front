import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import 'swiper/css/thumbs'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ProductCard } from '../ui/ProductCard'

export const SimilarProducts = () => {
	return (
		<>
			<div className='hidden lg:block mb-[250px]'>
				<p className='text-[26px] font-normal leading-[35px] mb-[13px] lg:mb-[47px]'>
					Similar Items
				</p>
				<div className='flex sm:justify-center md:justify-normal flex-wrap gap-[8px] sm:gap-[20px] md:gap-[30px] lg:gap-[52px] xl:gap-[57px]'>
					{products.slice(0, 3).map((product, i) => (
						<ProductCard
							key={i}
							propsKey={i}
							img={product.img}
							title={product.title}
							price={product.price}
						/>
					))}
				</div>
			</div>
			<div className='w-full block lg:hidden'>
				<Swiper
					spaceBetween={12}
					breakpoints={{
						320: {
							slidesPerView: 2.1,
						},
						640: {
							slidesPerView: 2.7,
						},
						770: {
							slidesPerView: 3.2,
						},
					}}
				>
					{products.map((product, i) => (
						<SwiperSlide key={i}>
							<ProductCard
								propsKey={i}
								img={product.img}
								title={product.title}
								price={product.price}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</>
	)
}

const products = [
	{ img: '/Item1.png', title: 'Lira Earrings', price: 20 },
	{ img: '/Item2.png', title: 'Hal Earrings', price: 30 },
	{ img: '/Item3.png', title: 'Kaede Hair Pin Set Of 3 ', price: 35 },
	{ img: '/Item4.png', title: 'Hair Pin Set of 3', price: 25 },
	{ img: '/Item5.png', title: 'Plaine Necklace', price: 75 },
]
