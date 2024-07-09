'use client'
import Link from 'next/link'
import { MouseEvent, ReactNode, useEffect, useState } from 'react'

interface ButtonProps {
	title?: string
	onClick?: any
	className?: string
	TitleClassName?: string
	heightCustom?: string
	href?: string
	removeSize?: boolean
	noEffectText?: boolean
	children?: ReactNode
	noStyle?: boolean
	titleSize?: string
}

export const Button = ({
	title,
	onClick,
	className,
	TitleClassName,
	heightCustom,
	href = '',
	removeSize,
	noEffectText,
	children,
	noStyle,
	titleSize,
}: ButtonProps) => {
	const handleClickLink = (e: MouseEvent<HTMLAnchorElement>) => {
		if (!href) {
			e.preventDefault()
		}
	}

	const [titleEffect, setTitleEffect] = useState('')

	useEffect(() => {
		setTimeout(() => {
			setTitleEffect('tracking-[2px] duration-200 opacity-40')
		}, 100)

		setTimeout(() => {
			setTitleEffect('tracking-[0px] duration-200 opacity-100 ')
		}, 400)

		setTimeout(() => {
			setTitleEffect('')
		}, 700)
	}, [title])

	return (
		<Link onClick={(e) => handleClickLink(e)} href={href}>
			<button
				onClick={onClick}
				className={`${
					noStyle
						? ''
						: 'flex justify-center items-center w-full rounded-[4px] border border-[#000000] active:bg-black active:text-white lg:hover:bg-black lg:hover:text-white duration-200 ease-out active:scale-[0.99] '
				}${className} ${
					!removeSize
						? heightCustom
							? heightCustom
							: 'h-[32px] sm:h-[45px] lg:h-[53px]'
						: ''
				}`}
			>
				{title && (
					<p
						className={`${
							titleSize
								? titleSize
								: 'text-[12px] sm:text-[14px] lg:text-[16px]'
						} font-normal lg:font-bold ${TitleClassName} ${
							!noEffectText ? titleEffect : ''
						}`}
					>
						{title}
					</p>
				)}
				{children}
			</button>
		</Link>
	)
}
