import { Button } from '@/components/ui/Button'
import { Section } from '@/components/ui/Section'
import Link from 'next/link'

export default function NotFound() {
	return (
		<Section>
			<div className='flex flex-col items-center my-[60px] lg:my-[210px]'>
				<p className='text-[20px] lg:text-[33px] mb-[24px]'>404 ERROR</p>
				<p className='text-[12px] lg:text-[20px] text-[#707070] text-center mb-[64px]'>
					This page not found; <br /> back to home and start again
				</p>
				<Link
					href={'https://shoppe-next-app-back-2.onrender.com'}
					className='w-[115px] lg:w-[187px]'
				>
					<Button title='HOMEPAGE' />
				</Link>
			</div>
		</Section>
	)
}
