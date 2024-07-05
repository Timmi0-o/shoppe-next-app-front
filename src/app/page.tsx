'use client'
import { Banner } from '@/components/layouts/Banner'
import { LatestShop } from '@/components/layouts/LatestShop'
import { Suspense } from 'react'
import Loading from '../utils/Loading'

export default function Home() {
	return (
		<Suspense fallback={<Loading />}>
			<div className={`mb-[45px] md:mb-[120px]`}>
				<div>
					<Banner />
					<LatestShop />
				</div>
			</div>
		</Suspense>
	)
}
