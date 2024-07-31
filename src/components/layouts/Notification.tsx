import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface NotificationProps {
	isActive?: boolean
	noticeImg?: string
	title: string
	btnTitle?: string
	onClick?: (event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => void
	href?: string
	position?: string
	borderTop?: boolean
}

export const Notification = ({
	isActive,
	noticeImg,
	title,
	btnTitle,
	onClick,
	position,
	href,
	borderTop,
}: NotificationProps) => {
	const [isActiveClass, setIsActiveClass] = useState(
		isActive !== undefined
			? 'opacity-0 z-[-1] left-[-30%]'
			: 'opacity-100 left-0 lg:mt-0'
	)

	useEffect(() => {
		if (isActive !== undefined) {
			if (isActive === true) {
				setIsActiveClass('opacity-100 left-0 lg:mt-0')
			} else {
				setIsActiveClass('opacity-0 z-[-1] left-[-30%]')
			}
		}
	}, [isActive])

	const handleIsNotLink = (
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	) => {
		if (href === undefined) e.preventDefault()
	}

	return (
		<div
			className={`flex items-center justify-between md:items-center md:justify-between ${
				borderTop ? 'border-t-[2px] border-t-[#A18A68]' : ''
			} ${
				position ? position : 'fixed lg:absolute z-9 bottom-0 lg:top-[-100px]'
			} h-[68px] bg-[#EFEFEF] px-[5px] sm:px-[16px] lg:px-[40px] duration-300 ease-in-out w-full ${isActiveClass}`}
		>
			<div className='flex gap-[16px] items-center'>
				<div className={`relative size-[20px] ${noticeImg ? '' : 'hidden'}`}>
					{noticeImg && <Image src={noticeImg ? noticeImg : ''} fill alt='' />}
				</div>
				<p className='text-[14px] md:text-[16px] leading-[27px] font-normal'>
					{title}
				</p>
			</div>
			{btnTitle && (
				<Link onClick={(e) => handleIsNotLink(e)} href={href || '#'}>
					<p
						onClick={onClick}
						className='text-[14px] md:text-[16px]  text-[#A18A68] cursor-pointer'
					>
						{btnTitle}
					</p>
				</Link>
			)}
		</div>
	)
}
