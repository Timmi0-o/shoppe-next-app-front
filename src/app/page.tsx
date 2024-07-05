import { Banner } from '@/components/layouts/Banner'
import { LatestShop } from '@/components/layouts/LatestShop'

export default function Home() {
	return (
		<div className={`mb-[45px] md:mb-[120px]`}>
			<div>
				<Banner />
				<LatestShop />
			</div>
		</div>
	)
}
