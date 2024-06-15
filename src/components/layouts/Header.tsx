'use client'
import { allertaStencil } from '@/utils/fonts'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Section } from '../ui/Section'

export const Header = () => {
	const [isNawActive, setIsNawActive] = useState<null | number>(null)
	return (
		<Section>
			<div
				className={`flex justify-between items-center h-[42px] mt-[5px] sm:mt-[64px] ${
					isNawActive !== null &&
					'pt-[17px] border-b-[1px] border-b-[#D8D8D8] pb-[24px]'
				}`}
			>
				<Link href={'/'}>
					<div
						onClick={() => setIsNawActive(null)}
						className={
							'flex text-[20px] sm:text-[28px] md:text-[35px] cursor-pointer ' +
							allertaStencil.className
						}
					>
						<p className='text-[#A18A68]'>S</p>HOPPE
					</div>
				</Link>
				<div
					className={`hidden md:flex ${
						isNawActive !== null ? ' items-start' : 'items-center'
					}`}
				>
					<div className='flex gap-[64px] mr-[48px]'>
						{nawLink.map((link, i) => (
							<Link onClick={() => setIsNawActive(i)} key={i} href={link.href}>
								<p
									className={`font-regular text-[16px] leading-[27px] cursor-pointer ${
										isNawActive === i &&
										'border-b-[2px] border-b-black pb-[24px]'
									}`}
								>
									{link.title}
								</p>
							</Link>
						))}
					</div>
					<div className='bg-[#707070] w-[1px] h-[17px]'></div>
					<div className='flex ml-[48px] gap-[39px]'>
						<div className='relative size-[20px]'>
							<Image src={'/search.svg'} fill alt='search' />
						</div>
						<div className='relative size-[20px]'>
							<Image src={'/shopping-cart.svg'} fill alt='search' />
						</div>
						<div className='relative size-[20px]'>
							<Image src={'/profile.svg'} fill alt='search' />
						</div>
					</div>
				</div>
				<div className='flex gap-[16px] md:hidden'>
					<div className='relative size-[18px]'>
						<Image src={'/shopping-cart.svg'} fill alt='search' />
					</div>
					<div className='relative w-[20px] h-[15px]'>
						<Image src={'/burger.svg'} fill alt='burger' />
					</div>
				</div>
			</div>
		</Section>
	)
}

const nawLink = [
	{ title: 'Shop', href: '#' },
	{ title: 'Blog', href: '#' },
	{ title: 'Our Story', href: '#' },
]
