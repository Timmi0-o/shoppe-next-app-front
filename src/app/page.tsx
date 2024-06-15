'use client'
import { Banner } from '@/components/layouts/Banner'
import { LatestShop } from '@/components/layouts/LatestShop'

export default function Home() {
	return (
		<div id='home' className='mb-[250px]'>
			<div id='content'>
				<Banner />
				<LatestShop />
			</div>
		</div>
	)
}
