import Image from 'next/image'
import Link from 'next/link'
import { Section } from '../ui/Section'

export const Footer = () => {
	return (
		<Section>
			<div className='h-[159px] border-t-[1px] mb-[90px] border-t-[#D8D8D8]'>
				<div className='flex justify-between items-center mt-[37px] mb-[47px]'>
					<div className='flex gap-[41px]'>
						{links.map((link, i) => (
							<Link key={i} href={link.href}>
								<p className='text-[16px] text-[#707070] hover:text-[#393939] active:text-[#000000] font-normal duration-200'>
									{link.title}
								</p>
							</Link>
						))}
					</div>
					<div className='flex justify-between items-center w-[396px] border-b-[1px] border-b-black pb-[13px]'>
						<input
							className='w-full outline-none placeholder:text-[16px] leading-[27px] font-normal'
							type='text'
							placeholder='Give an email, get the newsletter.'
						/>
						<div className='relative w-[25px] h-[9px]'>
							<Image src={'/input-arrow-footer.svg'} fill alt='arrow' />
						</div>
					</div>
				</div>
				<div className='flex justify-between items-center'>
					<div className='flex gap-[3px] text-[]'>
						© 2021 Shelly. <p className='text-[#707070]'>Terms of use</p> and
						<p className='text-[#707070]'>privacy policy</p>.
					</div>
					<div className='flex items-center gap-[20px] cursor-pointer'>
						{socialLinks.map((link, i) => (
							<div
								className=' flex justify-center items-center size-[32px] rounded-[50%] bg-transparent hover:bg-[#69696952] active:bg-[#35353552] duration-200'
								key={i}
							>
								<div
									className={`relative text-[#707070] hover:text-[#343434] ${link.size}`}
								>
									<Image src={link.img} fill alt={link.title} />
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</Section>
	)
}

const links = [
	{ title: 'CONTACT', href: '#' },
	{ title: 'TERMS OF SERVICES', href: '#' },
	{ title: 'SHIPPING AND RETURNS', href: '#' },
]

const socialLinks = [
	{ title: 'in', img: '/in.svg', href: '#', size: 'w-[18.5px] h-[18px]' },
	{
		title: 'facebook',
		img: '/facebook.svg',
		href: '#',
		size: 'w-[10px] h-[18px]',
	},
	{
		title: 'instagram',
		img: '/instagram.svg',
		href: '#',
		size: 'w-[18px] h-[18px]',
	},
	{ title: 'x', img: '/x.svg', href: '#', size: 'w-[20px] h-[17px]' },
]
