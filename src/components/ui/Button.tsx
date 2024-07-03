'use client'
import Link from 'next/link'
import { MouseEvent, MouseEventHandler, useEffect, useState } from 'react'

interface ButtonProps {
	title: string
	onClick?: MouseEventHandler<HTMLButtonElement>
	addedClass?: string
	AddTitleClass?: string
	heightCustom?: string
	href?: string
}

export const Button = ({
	title,
	onClick,
	addedClass,
	AddTitleClass,
	heightCustom,
	href = '',
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
				className={`flex justify-center items-center w-full  ${
					heightCustom ? heightCustom : 'h-[32px] sm:h-[45px] lg:h-[53px]'
				} rounded-[4px] border border-[#000000] active:bg-black active:text-white lg:hover:bg-black lg:hover:text-white duration-200 ease-out active:scale-[0.99] ${addedClass}`}
			>
				<p
					className={`text-[12px] sm:text-[14px] lg:text-[16px] leading-[20px] font-normal lg:font-bold lg:leading-[21px] ${AddTitleClass} ${titleEffect}`}
				>
					{title}
				</p>
			</button>
		</Link>
	)
}
