import { Section } from '@/components/ui/Section'

export default function PrivacyPolicy() {
	return (
		<Section>
			<div className='w-full mt-[39px] lg:mt-0 md:w-[550px] lg:w-[670px] mx-auto mb-[96px] lg:mb-[250px]'>
				<p className='w-full text-left lg:text-center text-[20px] lg:text-[33px] mb-[39px]'>
					Privacy Policy
				</p>
				<p className='w-full text-left text-[12px] lg:text-[16px] mb-[22px] lg:mb-[39px]'>
					Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
					sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget
					pellentesque risus scelerisque a. Nam ac urna maximus, tempor magna
					et, placerat urna. Curabitur eu magna enim. Proin placerat tortor
					lacus, ac sodales lectus placerat quis.
				</p>
				<p className='text-[16px] lg:text-[25px] mb-[13px] lg:mb-[24px]'>
					Security
				</p>
				<p className='text-[12px] lg:text-[16px] mb-[22px] lg:mb-[39px]'>
					Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
					sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget
					pellentesque risus scelerisque.
				</p>
				<p className='text-[16px] lg:text-[25px] mb-[13px] lg:mb-[24px]'>
					Cookies
				</p>
				<div className='flex flex-col gap-[15px] mt-[11px] lg:mt-[24px]'>
					{cookies.map((cookie, i) => (
						<div key={i} className='flex items-center gap-[10px]'>
							<div className='size-[8px] rounded-full bg-black'></div>
							<p className='text-[12px] lg:text-[16px]'>{cookie}</p>
						</div>
					))}
				</div>
			</div>
		</Section>
	)
}

const cookies = [
	'Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin',
	'Nam fringilla molestie velit, eget pellentesque risus scelerisque a',
]
