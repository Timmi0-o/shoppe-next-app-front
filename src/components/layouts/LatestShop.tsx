import { ProductCard } from '../ui/ProductCard'
import { Section } from '../ui/Section'

export const LatestShop = () => {
	return (
		<div className='mt-[64px]'>
			<Section title='Shop The Latest' postTitle='View All'>
				<div className='flex justify-center'>
					<div className='flex sm:justify-center md:justify-normal flex-wrap gap-[8px] sm:gap-[20px] md:gap-[30px] lg:gap-[52px] xl:gap-[57px]'>
						{products.map((product, i) => (
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
			</Section>
		</div>
	)
}

const products = [
	{ img: '/Item1.png', title: 'Lira Earrings', price: 20 },
	{ img: '/Item2.png', title: 'Hal Earrings', price: 30 },
	{ img: '/Item3.png', title: 'Kaede Hair Pin Set Of 3 ', price: 35 },
	{ img: '/Item4.png', title: 'Hair Pin Set of 3', price: 25 },
	{ img: '/Item5.png', title: 'Plaine Necklace', price: 75 },
]
