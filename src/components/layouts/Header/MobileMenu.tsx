'use client'
import { useUser } from '@/components/hooks/useUser'
import { Section } from '@/components/ui/Section'
import { allertaStencil } from '@/utils/fonts'
import Image from 'next/image'
import Link from 'next/link'
import { Dispatch, SetStateAction } from 'react'
import { IoClose } from 'react-icons/io5'

interface MobileMenuProps {
	isShowModal: boolean
	setIsShowModal: Dispatch<SetStateAction<boolean>>
	setIsShoppingBagShop: Dispatch<SetStateAction<boolean>>
}

export const MobileMenu = ({
	isShowModal,
	setIsShowModal,
	setIsShoppingBagShop,
}: MobileMenuProps) => {
	// GET USER DATA
	const { user } = useUser()
	return (
		<div>
			<Section>
				<div
					className={`fixed h-full w-full pt-[15px] bg-white ${
						isShowModal ? 'top-[0px] opacity-100' : 'top-[-1000%] opacity-50'
					}  left-0 duration-500 z-10 rounded-ee-[20px] rounded-es-[20px]`}
				>
					<div className='max-w-[320px] sm:max-w-[500px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1248px] mx-auto'>
						<div className='flex justify-between items-center'>
							<Link onClick={() => setIsShowModal(false)} href={'/'}>
								<div
									className={
										'flex text-[20px] sm:text-[28px] md:text-[35px] cursor-pointer ' +
										allertaStencil.className
									}
								>
									<p className='text-[#A18A68]'>S</p>HOPPE
								</div>
							</Link>
							<div className='flex items-center gap-[15px]'>
								<div
									onClick={() => setIsShoppingBagShop(true)}
									className='relative buttonActive size-[18px]'
								>
									<Image src={'/shopping-cart.svg'} fill alt='shopping-cart' />
								</div>
								<div
									className='relative buttonActive'
									onClick={() => setIsShowModal(!isShowModal)}
								>
									<IoClose className='size-[25px]' />
								</div>
							</div>
						</div>
						<div className='flex flex-col mt-[39px] gap-[24px] mb-[39px]'>
							{links.map((link, i) => (
								<Link
									onTransitionEnd={() => setIsShowModal(!isShowModal)}
									href={link.link}
									key={i}
								>
									<p className='text-[20px] font-normal leading-[26px] active:bg-[#f0f0f0] duration-300 text-left rounded-[4px] px-[4px] py-[2px]'>
										{link.title}
									</p>
								</Link>
							))}
						</div>
						<div className='w-full h-[1px] bg-[#D8D8D8]'></div>
						<div className='flex flex-col items-start gap-[23px] mt-[24px]'>
							<Link
								onTransitionEnd={() => setIsShowModal(!isShowModal)}
								href='/account'
							>
								<div className='flex items-center gap-[10px] active:bg-[#f0f0f0] duration-300 text-left rounded-[4px] px-[4px] py-[2px]'>
									<div className='relative size-[20px]'>
										<Image src={'/profile.svg'} fill alt='profile' />
									</div>
									<p className='text-[20px] font-normal leading-[26px]'>
										My account
									</p>
								</div>
							</Link>
							{user !== null && (
								<Link
									onClick={() => {
										localStorage.removeItem('token')
										setIsShowModal(false)
									}}
									onTransitionEnd={() => setIsShowModal(!isShowModal)}
									href='/'
								>
									<div className='flex items-center gap-[10px] active:bg-[#f0f0f0] duration-300 text-left rounded-[4px] px-[4px] py-[2px]'>
										<div className='relative size-[18px]'>
											<Image src={'/log-out.svg'} fill alt='profile' />
										</div>
										<p className='text-[20px] font-normal leading-[26px]'>
											Logout
										</p>
									</div>
								</Link>
							)}
						</div>
					</div>
				</div>
			</Section>
		</div>
	)
}

const links = [
	{ title: 'Home', link: '/' },
	{ title: 'Shop', link: '/shop' },
	{ title: 'About', link: '/about' },
	{ title: 'Blog', link: '/blog' },
	{ title: 'Help', link: '/help' },
	{ title: 'Contact', link: '/contact-as' },
	{ title: 'Search', link: '/search' },
]
