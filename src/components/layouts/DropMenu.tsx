import Image from 'next/image'
import { ReactNode, useState } from 'react'

interface DropMenuProps {
	title: string
	dropLink: ReactNode
	heightCustom?: string
	pc?: boolean
	list?: boolean
}

export const DropMenu = ({
	title,
	dropLink,
	heightCustom,
	pc,
	list,
}: DropMenuProps) => {
	const [isDropActive, setIsDropActive] = useState(false)
	return (
		<div
			onClick={() => setIsDropActive(!isDropActive)}
			className={`w-full flex flex-col gap-[10px] duration-300 ${
				isDropActive
					? `${heightCustom ? heightCustom : 'h-[150px]'}`
					: 'h-[20px]'
			} `}
		>
			<div
				className={`flex justify-between items-center lg:cursor-pointer ${
					pc && 'border-b-[1px] border-b-[#D8D8D8] pb-[12px]'
				}`}
			>
				<p>{title}</p>
				<div
					className={`relative w-[10px] h-[18px] duration-300 ease-out ${
						isDropActive ? 'rotate-180' : ''
					}`}
				>
					<Image src={'/drop-arrow.svg'} fill alt='drop-arrow' />
				</div>
			</div>
			{/* ДЕФОЛТНОЕ МЕНЮ */}
			<div
				className={` ${
					list && 'hidden'
				} text-[13px] duration-300 bg-[#f9f9f9] rounded-[6px] p-[5px] ${
					isDropActive
						? 'opacity-100 scale-[1]'
						: ' opacity-0 z-[-1] h-0 scale-[0.95]'
				}`}
			>
				{dropLink}
			</div>

			{/* ОПЦИОНАЛЬНОЕ ДРОП МЕНЮ СО СПИСКАМИ */}
			<div
				className={`${
					list ? 'flex' : 'hidden'
				} flex-col gap-[10px] duration-300 ${
					isDropActive ? 'h-fit' : 'h-0 opacity-0 z-[-1] ml-[10px]'
				}`}
			>
				{dropLink &&
					Array.isArray(dropLink) &&
					dropLink.map((link: string, i: number) => (
						<div
							className='text-[12px] md:text-[14px] lg:text-[16px] bg-[#f4f4f4] py-[5px] px-[10px] border rounded-[4px] cursor-pointer'
							key={i}
						>
							{link}
						</div>
					))}
			</div>
		</div>
	)
}
