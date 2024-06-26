import { Section } from '@/components/ui/Section'
import Image from 'next/image'

export default function About() {
	return (
		<Section>
			<div className='w-full mt-[39px] lg:mt-0 md:w-[550px] lg:w-[670px] mx-auto mb-[96px] lg:mb-[250px]'>
				<p className='w-full text-left lg:text-center text-[20px] lg:text-[33px] mb-[24px]'>
					About
				</p>
				<p className='hidden lg:block w-full text-center text-[20px] mb-[46px]'>
					Who we are and why we do what we do!
				</p>
				<p className='w-full text-left text-[12px] lg:text-[16px] mb-[22px] lg:mb-[39px]'>
					Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
					sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget
					pellentesque risus scelerisque a. Nam ac urna maximus, tempor magna
					et, placerat urna. Curabitur eu magna enim. Proin placerat tortor
					lacus, ac sodales lectus placerat quis.
				</p>
				<p className='text-[16px] lg:text-[25px] mb-[13px] lg:mb-[24px]'>
					Top trends
				</p>
				<div className='relative w-full h-[192px] lg:h-[300px] mt-[13px] lg:mt-[23px]'>
					<Image src={'/blog-details.png'} fill alt='blog-details' />
				</div>
				<p className='text-[12px] lg:text-[16px] mt-[16px] lg:mt-[48px] mb-[16px]'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
					placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
					maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
					consequat sed eu felis.
				</p>
				<div className='flex flex-col gap-[15px] mt-[11px] lg:mt-[24px]'>
					{cookies.map((cookie, i) => (
						<div key={i} className='flex items-center gap-[10px]'>
							<div className='size-[8px] rounded-full bg-black'></div>
							<p className='text-[12px] lg:text-[16px]'>{cookie}</p>
						</div>
					))}
				</div>
				<p className='text-[16px] lg:text-[25px] mb-[13px] lg:mb-[24px] mt-[39px]'>
					Produced with care
				</p>
				<div className='relative w-full h-[192px] lg:h-[300px] mt-[13px] lg:mt-[23px]'>
					<Image src={'/blog-details-big.png'} fill alt='blog-details' />
				</div>
				<p className='text-[12px] lg:text-[16px] mt-[16px] lg:mt-[48px] mb-[16px]'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
					placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
					maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
					consequat sed eu felis.
				</p>
			</div>
		</Section>
	)
}

const cookies = [
	'Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin',
	'Nam fringilla molestie velit, eget pellentesque risus scelerisque a',
]
