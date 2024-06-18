import Image from 'next/image'
import Link from 'next/link'
import { Section } from '../ui/Section'

export const Footer = () => {
	return (
		<Section>
			<div className='h-[159px] lg:border-t-[1px] mb-[90px] lg:border-t-[#D8D8D8]'>
				<div className='flex flex-col-reverse items-start md:flex-row sm:justify-between sm:items-center mt-[37px] mb-[32px] sm:mb-[47px]'>
					<div className='flex flex-col sm:flex-row gap-[8px] sm:gap-[25px] md:gap-[28px] lg:gap-[41px]'>
						{links.map((link, i) => (
							<Link key={i} href={link.href}>
								<p className='text-[12px] sm:text-[14px] lg:text-[16px] text-[#707070] hover:text-[#393939] active:text-[#000000] font-normal duration-200'>
									{link.title}
								</p>
							</Link>
						))}
					</div>
					{/* Подписка на рассылку через ввод почты */}
					<div>
						<div className='flex justify-between items-center w-[288px] sm:w-[300px] lg:w-[396px] border-b-[1px] border-b-black pb-[13px] sm:mb-[24px] md:mb-0'>
							<input
								className='w-full outline-none text-[14px] placeholder:text-[14px] md:text-[16px] md:placeholder:text-[16px] leading-[27px] font-normal'
								type='text'
								placeholder='Give an email, get the newsletter.'
							/>
							<div className='relative w-[25px] h-[9px] cursor-pointer'>
								<Image src={'/input-arrow-footer.svg'} fill alt='arrow' />
							</div>
						</div>
						{/* Согласие с правами сайта (only mobile) */}
						<div className='flex sm:hidden items-center mt-[11px] mb-[40px] gap-[4px]'>
							<div className='size-[13px] border-[1px] rounded-[2px] border-[#707070]'></div>
							<p className='text-[12px] font-normal'>
								I agree to the website’s terms and conditions
							</p>
						</div>
					</div>
				</div>
				<div className='flex flex-col-reverse sm:flex-row  justify-between items-center'>
					{/* Все права защищены */}
					<div className='flex gap-[3px] text-[12px] sm:text-[14px] md:text-[16px] w-full mb-[24px] sm:mb-0 lg:mb-[24px]'>
						© 2021 Shelly. <p className='text-[#707070]'>Terms of use</p> and
						<p className='text-[#707070]'>privacy policy</p>.
					</div>
					{/* follow us (ссылки на соц сети для ПК) */}
					<div className='hidden sm:flex items-center gap-[20px] cursor-pointer'>
						{socialLinks.map((link, i) => (
							<div
								className=' flex justify-center items-center size-[32px] rounded-[50%] bg-transparent lg:hover:bg-[#f1f1f1] lg:active:bg-[#d9d9d9] active:bg-[#35353552] duration-200'
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
					{/* follow us (ссылки на соц сети для мобилок) */}
					<div className='flex items-center gap-[15px] sm:hidden w-full mb-[36px] '>
						<p className='text-[12px] font-normal leading-[20px]'>Follow us</p>
						<div className='w-[47px] h-[1px] bg-black'></div>
						<div className='flex sm:hidden items-center gap-[10px] cursor-pointer'>
							{socialLinks.map(
								(link, i) =>
									i !== 0 && (
										<div
											className='flex justify-center items-center size-[22px] rounded-[50%] bg-transparent active:bg-[#35353552] duration-200'
											key={i}
										>
											<div
												className={`relative text-[#707070] hover:text-[#343434] ${link.size}`}
											>
												<Image src={link.img} fill alt={link.title} />
											</div>
										</div>
									)
							)}
						</div>
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
		size: 'w-[7px] h-[12px] sm:w-[10px] sm:h-[18px]',
	},
	{
		title: 'instagram',
		img: '/instagram.svg',
		href: '#',
		size: 'size-[12px] sm:w-[18px] sm:h-[18px]',
	},
	{
		title: 'x',
		img: '/x.svg',
		href: '#',
		size: 'w-[14px] h-[12px] sm:w-[20px] sm:h-[17px]',
	},
]
