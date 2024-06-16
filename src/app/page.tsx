import { Banner } from '@/components/layouts/Banner'
import { LatestShop } from '@/components/layouts/LatestShop'

export default function Home() {
	return (
		<div className='mb-[75px] md:mb-[150px]'>
			<div>
				<Banner />
				<LatestShop />
			</div>
		</div>
	)
}
